import logo from "../../assets/images/logo.jpg";

const MainNav = () => {
  return (
    <header className="header-1">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-3 col-sm-5 col-md-4 col-6 pr-lg-5">
            <div className="logo">
              <a href="index.html">
                <img src={logo} alt="quantech" />
              </a>
            </div>
          </div>
          <div className="col-lg-9 text-end p-lg-0 d-none d-lg-flex justify-content-between align-items-center">
            <div className="menu-wrap">
              <div className="main-menu">
                <ul>
                  <li>
                    <a href="#">
                      Home <i className="fas fa-angle-down"></i>
                    </a>
                  </li>

                  <li>
                    <a href="services.html">services</a>
                  </li>
                  <li>
                    <a href="projects.html">projects</a>
                  </li>

                  <li>
                    <a href="news.html">Blogs</a>
                  </li>
                  <li>
                    <a href="about.html">About</a>{" "}
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="header-right-element">
              <a href="contact.html" className="theme-btn">
                get a quote
              </a>
            </div>
          </div>
          <div className="d-block d-lg-none col-sm-1 col-md-8 col-6">
            <div className="mobile-nav-wrap">
              <div id="hamburger">
                <i className="fal fa-bars"></i>
              </div>
              {
                //<!-- mobile menu - responsive menu  -->
              }
              <div className="mobile-nav">
                <button type="button" className="close-nav">
                  <i className="fal fa-times-circle"></i>
                </button>
                <nav className="sidebar-nav">
                  <ul className="metismenu" id="mobile-menu">
                    <li>
                      <a className="has-arrow" href="#">
                        Homes
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="index.html">Homepage 1</a>
                        </li>
                        <li>
                          <a href="index-2.html">Homepage 2</a>
                        </li>
                        <li>
                          <a href="index-3.html">Homepage 3</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="about.html">about</a>
                    </li>
                    <li>
                      <a href="services.html">services</a>
                    </li>
                    <li>
                      <a href="projects.html">projects</a>
                    </li>
                    <li>
                      <a className="has-arrow" href="#">
                        Pages
                      </a>
                      <ul className="sub-menu">
                        <li>
                          <a href="faq.html">faq</a>
                        </li>
                        <li>
                          <a href="services-details.html">services details</a>
                        </li>
                        <li>
                          <a href="team.html">Team</a>
                        </li>
                        <li>
                          <a href="404.html">404</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="news.html">News</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>

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
