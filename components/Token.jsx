import React, { useEffect, useState   } from "react";
import { shortenAddress } from "../utils/index";

const Token = (
  notifyError,
  notifySuccess,
  setOpenToken,
  LOAD_TOKEN,
  setToken_1,
  setToken_2,
  token_1,
  token_2
) => {
  const [searchToken, setSearchToken] = useState();
  const [displayToken, setDisplayToken] = useState();

  useEffect(() => {
    const loadToken = async() => {
      const token = await LOAD_TOKEN(searchToken);

      if (token == undefined) {
        notifyError("Token address is missing");
      } else {
        setDisplayToken(token);
      }
    };

    loadToken();
  }, [searchToken]);

  const selectToken = () => {
    if (token_1 == undefined) {
      setToken_1(displayToken)
    }
  }

  return <div>Token</div>;
};

export default Token;

