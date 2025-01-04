import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";  

const Hero = ({ 
  setInputAmount,
  setLoader,
  setOpenToken,
  LOAD_TOKEN,
  token_1,
  token_2,
  setToken_1,
  setToken_2,
  swap,
}) => {
  //reset button
  const reset = () => {
    setToken_1("");
    setToken_2("");
  }

  return (
    <div className="banner"
      style={{backgroundImage: `url("assets/img/banner-bg.png")`}}
      id="home"
    >
      <div className="illustration">
        <img className="one"
          src="assets/img/banner-bg-1.png" 
          alt=""
        />

        <img className="two" 
          src="assets/img/banner-bg-2.png"
          alt=""
        />

        <img className="three" 
          src="assets/img/banner-map.png"
          alt=""
        />
      </div>

      <div className="hero-area">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-6">
              <div className="banner-content wow fadeInUp"
                data-wow-duration="0.5s"
                data-wow-delay="0.3s"
              >
                <h3 className="subtaitle">
                  Fast and Convenient
                </h3>

                <h1 className="head"> Cryptocurrency Exchange</h1>

                <p className="text">
                  Decentralized crypto exchange 
                  Joker is a reliable partner and part
                  of the ecosystem of the Joker meta universe.
                </p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 wow fadeInRightBig"
              data-wow-delay="0.3s"
              data-wow-duration="0.5s"
            >
              <div className="exchange">
                <h5 className="ex-head">
                  Cryptocurrency Exchange
                </h5>

                <div className="exchange-box">
                  <div className="selector">
                    <p className="text">
                      Your Change
                    </p>

                    <div className="coin">
                      <span>{token_1?.symbol}</span>
                    </div>
                  </div>

                  <div>
                    <div className="form-group">
                      <span onClick={() => setOpenToken(true)}>
                        Open
                      </span>

                      <input className="form-control"
                        type="text" 
                        placeholder={token_1?.symbol || "Select"}
                        onChange={(e) => setInputAmount(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  {token_1 ? (
                    <span className="rate">
                      {`Balance: ${token_1?.balance.slice(0, 10)}`}
                      {token_1?.symbol}
                    </span>
                  ): (
                    ""
                  )}
                </div>

                <a className="rotate">
                  <img src="assets/img/exchange-img.png" alt="" 
                    onClick={() => reset()}
                  />
                </a>

                <div className="exchange-box">
                  <div className="selector">
                    <p className="text">
                      You Get
                    </p>

                    <div className="coin">
                      <span>{token_2?.symbol}</span>
                    </div>
                  </div>

                  <div>
                    <div className="form-group">
                      <span onClick={() => setOpenToken(true)}>
                        Open
                      </span>

                      <input className="form-control" 
                        onChange={(e) => setInputAmount(e.target.value)}
                        placeholder={token_2?.symbol || "Select"}
                      />
                    </div>
                  </div>

                  {token_2 ? (
                    <span className="rate">
                      {`Balance: ${token_2?.balance.slice(0, 10)}`}
                      {token_2?.symbol}
                    </span>
                  ): (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
