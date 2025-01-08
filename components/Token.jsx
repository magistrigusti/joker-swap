import React, { useEffect, useState } from "react";
import { shortenAddress } from "../utils/index";

const Token = ({
  notifyError,
  notifySuccess,
  setOpenToken,
  LOAD_TOKEN,
  setToken_1,
  setToken_2,
  token_1,
  token_2,
}) => {
  const [searchToken, setSearchToken] = useState("");
  const [displayToken, setDisplayToken] = useState(null);

  useEffect(() => {
    const loadToken = async () => {
      if (!searchToken) return;

      const token = await LOAD_TOKEN(searchToken);
      if (!token) {
        notifyError("Token address is missing");
        setDisplayToken(null);
      } else {
        setDisplayToken(token);
      }
    };

    loadToken();
  }, [LOAD_TOKEN, notifyError, searchToken]);

  const selectToken = () => {
    if (!token_1) {
      setToken_1(displayToken);
    } else {
      setToken_2(displayToken);
    }
    setOpenToken(false);
  };

  return (
    <div className="banner">
      <div className="hero-area">
        <div className="conatiner">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-8 col-lg-6 wow new-width">
              <div className="exchange">
                <h5 className="ex-head">Cryptocurrency Token</h5>

                <div className="exchange-box">
                  <div className="selector">
                    <p className="text">Search token address</p>
                    <div className="icon">
                      <span>{displayToken?.symbol || "No token"}</span>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      onChange={(e) => setSearchToken(e.target.value)}
                      placeholder="Enter token address"
                      value={searchToken}
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {displayToken && (
                <a className="button button-1" onClick={selectToken}>
                  {shortenAddress(displayToken?.address)} {displayToken?.symbol}
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Token;
