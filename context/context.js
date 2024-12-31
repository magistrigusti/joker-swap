import React, { useState } from "react";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import JSBI from "jsbi";
import Web3Modal from web3modal;

import { SwapRouter } from "@uniswap/universal-router-sdk";
import {
  TradeType,
  Ether,
  Token,
  CurrencyAmount,
  Percent,
} from "@uniswap/sdk-core";
import { Trade as V2Trade } from "@uniswap/v2-sdk";
import {
  Pool,
  nearestUsableTick,
  TickMath,
  TICK_SPACINGS,
  FeeAmount,
  Trade as V3Trade,
  Route as RouteV3,
} from "@uniswap/v3-sdk";
import { MixedRouteTrade, Trade as RouterTrade } from "@uniswaprouter-sdk";
import IUniswapV3Pool from "@uniswap/v3-core/artifacts/contracts/UniswapV3Pool.sol/UniswapV3Pool.json";

import { ERC20_ABI, web3Provider, CONNECTING_CONTRACT } from "./constans";
import { shortenAddress, parseErrorMsg } from "../utils/index";

export const CONTEXT = React.createContext();

export const PROVIDER = ({children}) => {
  const TOKEN_SWAP = "JOKER TOKEN SWAP";
  const [loader, setLoader] = useState(false);
  const [address, setAddress] = useState("");
  const [chainID, setChainID] = useState();

  const notifyError = (msg) => toast.error(msg, {duration: 4000});
  const notifySuccess = (msg) => toast.success(msg, {duration: 4000});

  //connect wallet function
  const connect = async() => {
    try {
      if(!indow.ethereum) return notifyError("Install MetaMask");

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts.length) {
        setAddress(accounts[0]); 
      } else {
        notifyError("Sorry, you have no account");
      }

      const provider = await web3Provider();
      const network = await provider.getNetwork();
      setChainID(network.chainId);
    } catch (error) {
      const errorMsg = parseErrorMsg(error);
      notifyError(errorMsg);
      console.log(error);
    }
  };

  //load token data
  const LOAD_TOKEN = async(token) => {
    try {
      const tokenDetail = await CONNECTING_CONTRACT(token);
      return tokenDetail;
    } catch (error) {
      const errorMsg = parseErrorMsg(error);
      notifyError(errorMsg);
      console.log(error);
    }
  };

  //internal
  async function getPool(tokenA, tokenB, feeAmount, provider) {
    const [token0, token1] = tokenA.sortsBefore(tokenB) 
      ? [tokenA, tokenB] : [tokenB, tokenA];
    
    const poolAddress= Pool.getAddress(token0, token1, feeAmount);
    const contract = new ethers.Contract(poolAddress, IUniswapV3Pool, provider);
    let liquidity = await contract.liquidity();
    let { sqrtPriceX96 , tick } = await contract.slot0();

    liquidity = JSBI.BigInt(liquidity.toString());
    sqrtPriceX96 = JSBI.BigInt(sqrtPriceX96.toString());
    console.log("CALLAING_POOL------");

    return new Pool(
      token0, token1, feeAmount, sqrtPriceX96, 
      liquidity, tick, [{
        index: nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[feeAmount]),
        liquidityNet: liquidity,
        liquidityGross: liquidity 
      }, {
        index: nearestUsableTick(TickMath.MIN_TICK, TICK_SPACINGS[feeAmount]),
        liquidiyNet: JSBI.multiply(liquidity, JSBI.BigInt("-1")),
        liquidityGross: liquidity
      }
    ])
  }

  //swap option function internal
  function swapOptions(options) {
    return Object.assing(
      {
        slippageTolerance: new Percent(5, 1000),
        recipient: RECEIPIENT,
      },
      options
    );
  }

  //build trade
  function buildTrade(trades) {
    return new RouterTrade({
      v2Routes: trades
        .filter((trade) => trade instanceof V2Trade)
        .map((trade) => ({
          routev2: trade.route,
          inputAmount: trade.inputAmount,
          outputAmount: trade.outputAmount,
        })),

      v3Routes: trades
        .filter((trade) => trade instanceof V3Trade)
        .map((trade) => ({
          routev3: trade.route,
          inputAmount: trade.inputAmount,
          outputAmount: trade.outputAmount,
        })),

      mixedRoutes: trades
        .filter((trade) => trade instanceof V3Trade)
        .map((trade) => ({
          mixedRoute: trade.route,
          inputAmount: tradeinputAmount,
          outputAmount: trade.outputAmount,
        })),
        tradeType: trades[0].tradeType,
    });
  }

  //demo account 
  const RECIPIENT = "0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B";

  //swap 
  const swap = async(token_1, token_2, swapInputAmount) => {
    try {
      console.log("CALLING ME______SWAP");
      const _inputAmount = 1;
      const provider = web3Provider();

      const network = await provider.getNetwork();
      // const ETHER = Ether.onChain(network.chainID)
      const ETHER = Ether.onChain(1);

      const tokenAddress1 = await CONNECTING_CONTRACT("");
      const tokenAddress2 = await CONNECTING_CONTRACT("");

      const TOKEN_A = new Token(
        tokenAddress1.chainId,
        tokenAddress1.address,
        tokenAddress1.decimals,
        tokenAddress1.symbol,
        tokenAddress1.name
      );

      const TOKEN_B = new Token(
        tokenAddress2.chainId,
        tokenAddress2.address,
        tokenAddress2.decimals,
        tokenAddress2.symbol,
        tokenAddress2.name
      );

      const WETH_USDC_V3 = await getPool(
        TOKEN_A, TOKEN_B, FeeAmount.MEDIUM, provider
      );

      const inputEther = ethers.utils.parseEther("1");

      const trade = await V3Trade.fromRoute(
        new RouteV3([WETH_USDC_V3, ETHER, TOKEN_B]),
        CurrencyAmount.fromRawAmount(Ether, inputEther),
        TradeType.EXACT_INPUT
      );

      const routerTrade = buildTrade([trade]);
      const opts = swapOptions({});
      const params = SwapRouter.swapERC20CallParameters(routerTrade, opts);

      console.log(WETH_USDC_V3);
      console.log(trade);
      console.log(routerTrade);
      console.log(opts);
      console.log(params);

      let ethBalance;
      let tokenA;
      let tokenB;

      ethBalance = await provider.getBalance(RECIPIENT);
      tokenA = await tokenAddress1.balance;
      tokenA = await tokenAddress2.balance;
      console.log("____________BEFORE");
      console.log("EthBalance:", ethers.utils.formatUnits(eth));
    } catch (error) {
      const errorMsg = parseErrorMsg(error);
      notifyError(errorMsg);
      console.log(error);
    }
  }

};

   