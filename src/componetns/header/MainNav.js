import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/images/logo.jpg";

const MainNav = () => {
  return (
    <header className="header-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-sm-5 col-md-4 col-6 pr-lg-5">
            <div className="logo">
              <Link to="#">
                <img src={logo} alt="hex-labs" />
              </Link>
            </div>
          </div>
          <div className="col-lg-9 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center">
            <div className="menu-wrap">
              <div className="main-menu">
                <ul>
                  <li>
                    <Link to="#">Home</Link>
                  </li>

                  <li>
                    <Link to="#">services</Link>
                  </li>
                  <li>
                    <Link to="#">projects</Link>
                  </li>

                  <li>
                    <Link to="#">Blogs</Link>
                  </li>
                  <li>
                    <Link to="#">About</Link>{" "}
                  </li>
                  <li>
                    <Link to="#">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right-element">
              <Link to="#" className="theme-btn">
                get a quote
              </Link>
            </div>
          </div>
          <div className="d-block d-lg-none col-sm-1 col-md-8 col-6">
            <div className="mobile-nav-wrap">
              <div id="hamburger">
                <FontAwesomeIcon icon={faBars} />
              </div>
              {
                //<!-- mobile menu - responsive menu  -->
              }
              <div className="mobile-nav">
                <button type="button" className="close-nav">
                  <FontAwesomeIcon icon={faXmark} />
                </button>
                <nav className="sidebar-nav"></nav>

                <div className="action-bar text-white">
                  <div className="single-info-element">
                    <div className="icon">
                      <i className="fal fa-map-marked-alt"></i>
                    </div>
                    <div className="text">
                      <h5>visit our location:</h5>
                      <span>West Jakarta City, UK</span>
                    </div>
                  </div>
                  <div className="single-info-element">
                    <div className="icon">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="text">
                      <h5>Opening Hours:</h5>
                      <span>Mon-Fri 8am-5pm</span>
                    </div>
                  </div>
                  <div className="single-info-element">
                    <div className="icon">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="text">
                      <h5>Send us mail</h5>
                      <span>info@example.com</span>
                    </div>
                  </div>
                  <div className="call-us">
                    <div className="icon text-white">
                      <i className="fal fa-phone-volume"></i>
                    </div>
                    <div className="text">
                      <h5>Phone Number</h5>
                      <span>+09 949 858327</span>
                    </div>
                  </div>
                  <a href="contact.html" className="theme-btn mt-4">
                    Free Consulting
                  </a>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MainNav;
