import React from "react";

const Platfrom = () => {
  return (
    <div className="platfrom" id="about">
      <div className="bg">
        <img src="assets/img/platfrom.png" alt="" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="content">
              <div className="row justify-content-center">
                <div className="col-lg-9 text-center wow fadeInup"
                  data-wow-duration="0.3s"
                  data-wow-delay="0.3s"
                >
                  <div className="section-head">
                    <h4 className="lasthead">About Us</h4>

                    <h2 className="title">
                      The Online Cryptocurrency
                      Exchange Platform
                    </h2>

                    <p>
                      On the Joker exchange you can freely buy and sell 
                      cryptocurrencies. You can also use the platform for
                      safe storage of your cryptocurrency and passive aernings 
                      by staking cryptocurrencies r depositing in using our
                      native Joker token. We have the lowest fees on the entire 
                      crypto market. You will also have access to NFT auctions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platfrom;
