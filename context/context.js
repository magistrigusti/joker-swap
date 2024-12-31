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
  }
}

   