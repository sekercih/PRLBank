import React from "react";

const NavBar = () => {
  return (
    <div className="navbar-area bg-one">
      <nav className="navbar navbar-area navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              className="menu toggle-btn d-block d-lg-none"
              data-target="#banlank_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="icon-left"></span>
              <span className="icon-right"></span>
            </button>
          </div>
          <div className="logo d-block d-lg-none">
            <a href="index.html">
              <img src="assets/img/logo.png" alt="img" />
            </a>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <a className="btn btn-round" href="#">
              Sign In
            </a>
          </div>
          <div className="collapse navbar-collapse" id="banlank_main_menu">
            <ul className="navbar-nav menu-open">
              <li className="menu-item-has-children current-menu-item">
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="loan.html">Loans</a>
              </li>
              <li>
                <a href="about.html">About Us</a>
              </li>
              <li>
                <a href="services.html">Services</a>
              </li>
              <li>
                <a href="contact.html">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
