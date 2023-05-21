import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeOpen,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

import footerLOgo from "../../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer class="footer-1 footer-wrap">
      <div class="footer-widgets-wrapper text-white bg-cover footer-bg">
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-xl-3">
              <div class="about-quantech pe-md-5 pe-xl-0">
                <a href="index.html">
                  <img
                    src={footerLOgo}
                    alt="hex labs"
                    style={{ borderRadius: "20px" }}
                  />
                </a>
                <p>
                  Hex labs is IT Solutions & Technology business, then you
                  should choose QuanTech Theme. Startup, Digital marketing, IT
                  Agency Services, IT Consultant and Tech Business
                </p>
              </div>
            </div>

            <div class="col-sm-6 col-xl-3">
              <div class="single-footer-wid ps-xl-5">
                <div class="wid-title">
                  <h3>Information</h3>
                </div>
                <ul>
                  <li>
                    <Link to="/service">What We Do</Link>
                  </li>
                  <li>
                    <Link to="/contact">About Us</Link>
                  </li>
                  <li>
                    <Link to="/services">IT Solutions</Link>
                  </li>
                  <li>
                    <Link to="/team">Our Team</Link>
                  </li>
                  <li>
                    <Link to="/project-details">Case Study</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-sm-6 col-xl-3">
              <div class="single-footer-wid ps-xl-2">
                <div class="wid-title">
                  <h3>Our Services</h3>
                </div>
                <ul>
                  <li>
                    <Link to="#">IT Solutions</Link>
                  </li>
                  <li>
                    <Link to="#">Technology</Link>
                  </li>
                  <li>
                    <Link to="#">WordPress Theme</Link>
                  </li>
                  <li>
                    <Link to="#">digital marketing</Link>
                  </li>
                  <li>
                    <Link Link to="#">
                      Tech consultant
                    </Link>
                  </li>
                  <li>
                    <Link to="#">web agency</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div class="col-sm-6 col-xl-3">
              <div class="single-footer-wid site-info-widget">
                <div class="wid-title">
                  <h3>Get In Touch</h3>
                </div>
                <div class="get-in-touch">
                  <div class="single-contact-info">
                    <div class="icon id1">
                      <FontAwesomeIcon icon={faLocationDot} />
                    </div>
                    <div class="contact-info">
                      <span>Arat Kilo, Addis Ababa, Ethiopia</span>
                    </div>
                  </div>
                  <div class="single-contact-info">
                    <div class="icon id2">
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </div>
                    <div class="contact-info">
                      <span>+251-977-448-535</span>
                    </div>
                  </div>
                  <div class="single-contact-info">
                    <div class="icon id3">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </div>
                    <div class="contact-info">
                      <span>cto@hexlabs.tech</span>
                    </div>
                  </div>
                </div>

                <div class="newsletter_widget">
                  <div class="newsletter_box">
                    <form action="#">
                      <input
                        type="email"
                        placeholder="Enter email address"
                        required
                      />
                      <button class="submit-btn" type="submit">
                        <FontAwesomeIcon icon={faEnvelopeOpen} />
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="container align-items-center">
          <div class="bottom-content-wrapper">
            <div class="row">
              <div class="col-md-6 col-12">
                <div class="copy-rights">
                  <p>
                    &copy;2023 <strong>hex labs</strong>, All Rights Reserved
                  </p>
                </div>
              </div>
              <div class="col-md-6 mt-2 mt-md-0 col-12 text-md-end">
                <div class="social-links">
                  <a href="#hex-labs-facebook" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
                  </a>
                  <a href="#hex-labs-twitter" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/hexlabs-et/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
                  </a>
                  <a href="#hex-labs-yotube" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
