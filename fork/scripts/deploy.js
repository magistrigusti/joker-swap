const { SwapRouter } = require("@uniswap/universal-router-sdk");
const {
  TradeType,
  Ether,
  Token,
  CurrentAmount,
  Percent,
} = require("@uniswap/sdk-core");
const { Trade: V2Trade } = require("@uniswap/v2-sdk");
const {
  Pool,
  nearestUsableTick,
  TickMath,
  TICK_SPACINGS,
  FeeAmount,
  Trade: V3Trade,
  Route: RouteV3,
} = require("@uniswap/v3-sdk");