import React from "react";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="sign-up-area">
          <div className="row">
            <div className="col-lg-6">
              <div className="media align-items-center">
                <div className="media-left">
                  <i className="fa fa-envelope-o"></i>
                </div>
                <div className="media-body">
                  <h5>SignUp For Newsletter</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <form className="d-md-inline-flex">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    placeholder="Your mail here"
                  />
                </div>
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer-area">
        <div className="container">
          <div className="footer-inner">
            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="widget widget-address">
                  <a className="widget-title" href="#">
                    <img src="assets/img/logo-2.png" alt="logo" />
                  </a>
                  <ul className="widget-list">
                    <li>564, Manon road, F1 456 Caron Town.</li>
                    <li>Office No 3456</li>
                    <li>info@example.com</li>
                    <li>234-5825852763</li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 offset-lg-1">
                <div className="widget widget-links">
                  <h4 className="widget-title">Links.</h4>
                  <ul className="widget-list">
                    <li>
                      <a href="#">Banking Way</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Home</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6">
                <div className="widget widget-about">
                  <h4 className="widget-title">About Us.</h4>
                  <ul className="widget-list">
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Sign in</a>
                    </li>
                    <li>
                      <a href="#">My Account</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="widget widget-contact">
                  <h4 className="widget-title">Contact Us.</h4>
                  <p>
                    Our E-Banking in the most poular in the world Many desktop
                    publishing packages and web page editors now use thei.
                  </p>
                  <ul className="social-area">
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="text-lg-left text-center">
                <ul>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="copy-right text-lg-right text-center">
                @ 2020, E-Bankong all right reserved
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="back-to-top">
        <span className="back-top">
          <i className="fa fa-angle-double-up"></i>
        </span>
      </div>
    </>
  );
};

export default Footer;
