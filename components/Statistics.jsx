import React from "react";

const Statistics = () => {
  return (
    <div className="statistic">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="0.3s"
            data-wow-delay="0.3s"
          >
            <div className="platfrom-box text-center">
              <div className="icon">
                <img src="assets/img/offer-icon-1.png" alt="" />
              </div>

              <p className="text">
                Extra Fast <br /> Transaction
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="0.4s"
            data-wow-delay="0.4s"
          >
            <div className="platfrom-box text-center">
              <div className="icon">
                <img src="assets/img/offer-icon-2.png" alt="" />
              </div>

              <p className="text">
                Secure <br /> Transaction
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wow-delay="0.5s"
          >
            <div className="platfrom-box text-center">
              <div className="icon">
                <img src="assets/img/offer-icon-3.png" alt="" />
              </div>

              <p className="text">
                No Limits on <br /> Exchange
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6 wow fadeInUp"
            data-wow-duration="0.6s"
            data-wow-delay="0.6s"
          >
            <div className="platfrom-box text-center">
              <div className="icon">
                <img src="assets/img/offer-icon-4.png" alt="" />
              </div>

              <p className="text">
                We have the best <br /> Exchange rate
              </p>
            </div>
          </div>

          <div className="col-12">
            <div className="content">
              <div className="bg-pic">
                <img src="assets/img/stasictic-bg.png" alt="" />
              </div>

              <div className="section-head text-center wow fadeInUp"
                data-wow-duration="0.3s"
                data-wow-delay="0.3s"
              >
                <h4 className="lasthead">
                  Our stats say more then any words
                </h4>

                <h2 className="title">
                  Today's Statistics
                </h2>

                <p className="text">
                  Users Online 349876
                </p>
              </div>

              <div className="row ustify-content-center">
                <div className="col-xl-4 col-lg-6 wow fadeInUp"
                  data-wow-duration="0.3s"
                  data-wow-delay="0.3s"
                >
                  <div className="statis-boxx">
                    <div className="icon">
                      <img src="assets/img/stasictic-icon-1.png" alt="" />
                    </div>

                    <div className="statis-content">
                      <h3 className="suntitle">482</h3>

                      <p className="text">Transaction Made</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-6 wow fadeInUp"
                  data-wow-duration="0.4s"
                  data-wow-delay="0.4s"
                >
                  <div className="statis-boxx">
                    <div className="icon">
                      <img src="assets/img/stasictic-icon-1.png" alt="" />
                    </div>

                    <div className="statis-content">
                      <h3 className="suntitle">ETH-BCH</h3>

                      <p className="text">Today's champion pair</p>
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-6 wow fadeInUp"
                  data-wow-duration="0.5s"
                  data-wow-delay="0.5s"
                >
                  <div className="statis-boxx">
                    <div className="icon">
                      <img src="assets/img/stasictic-icon-1.png" alt="" />
                    </div>

                    <div className="statis-content">
                      <h3 className="suntitle">12 Mins</h3>

                      <p className="text">Average processing time</p>
                    </div>
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

export default Statistics;
