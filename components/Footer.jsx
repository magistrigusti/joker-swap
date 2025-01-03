import React from "react";

const Footer = () => {
  return (
    <div className="footer"
      style={{ backgroundImage: "url('assets/img/footer-bg.png')" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 wow fadeInUp"
            data-wow-duration="03s"
            data-wow-delay="0.2s"
          >
            <div className="top-footer">
              <div className="logo">
                <img style={{ height: "100px" }} src="assets/img/joker-logo-black.png" alt="" />
              </div>

              <a className="button-1" href="/">
                get In touch
              </a>
            </div>
          </div>
        </div>

        <div className="row justify-content-between">
          <div className="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.3s"
            data-wowo-delay="0.3s"
          >
            <div className="footer-box">
              <h4 className="lasthead">Company</h4>
              <ul className="footer-link">
                {["About Us", "Contact Us", "Blog", "Affilite"]
                  .map((item, index) => (
                    <li key={index}>
                      <a href="#">{item}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.4s"
            data-wowo-delay="0.4s"
          >
            <div className="footer-box">
              <h4 className="lasthead">Sypport</h4>
              <ul className="footer-link">
                {["FAQ", "Contact Time", "How its work", "Details"]
                  .map((item, index) => (
                    <li key={index}>
                      <a herf="#">{item}</a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wowo-delay="0.5s"
          >
            <div className="footer-box">
              <h4 className="lasthead">Policy</h4>
              <ul className="footer-link">
                {[
                  "Terms Of use",
                  "Privacy Policy",
                  "Returnds Policy",
                  "Money type",
                ].map((item, index) => (
                  <li key={index}>
                    <a href="#">{item}</a>
                  </li>
                ))
                }
              </ul>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 wow fadeInUp"
            data-wow-duration="0.5s"
            data-wowo-delay="0.5s"
          >
            <div className="footer-box">
              <h4 className="lasthead">Newsletter</h4>
              <form auction="#">
                <div className="form-group">
                  <input type="email"
                    placeholder="Enter email address"
                  />

                  <button className="button-1">
                    Join Now
                  </button>
                </div>
              </form>

              <div className="social-style">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className=" fab fa-pinterest-p"></i>
                </a>
                <a href="#">
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center wow fadeInUp"
            data-wow-duration="0.4s"
            data-wowo-delay="0.4s"
          >
            <div className="footer-bottom">
              <p className="text">
                Copyright &copy;
                <a href="#"> M@gistriGusti developers </a>{" "}
                | <a href="#"> 2025</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
