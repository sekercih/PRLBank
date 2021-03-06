import React from 'react'

const Header = () => {
 return (
  <div className="header-area">
        <div classNameName="container">
            <div className="row">
                <div className="col-md-3 align-self-center">
                    <div className="logo d-lg-inline-block d-none">
                        <a href="index.html"><img src="assets/img/logo.png" alt="img"></a>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 text-lg-right text-center">
                    <div className="media d-sm-inline-flex m-0">
                        <div className="media-left align-self-center">
                            <img src="assets/img/icon/phone.png" alt="phone">
                        </div>
                        <div className="media-body text-left">
                            <p>Free Call To Us:</p>
                            <p>+5 (87) 8695-312</p>
                        </div>
                    </div>
                    <div className="media d-sm-inline-flex">
                        <div className="media-left align-self-center">
                            <img src="assets/img/icon/clock.png" alt="phone">
                        </div>
                        <div className="media-body text-left">
                            <p>Open Time: </p>
                            <p>Mon-Sat (10 AM - 6 PM)</p>
                        </div>
                    </div>
                    <a id="account" className="btn btn-round d-lg-inline-block d-none" href="#">Sign In</a>
                </div>
            </div>
        </div>
    </div>
 )
}

export default Header
