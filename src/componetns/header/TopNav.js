import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const TopNav = () => {
  return (
    <div className="top-bar-wrapper d-none d-sm-block">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="top-left">
          <a href="tel:+251977448535">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              style={{ margin: "0 0.5rem" }}
            />
            <span>+251-977-448-535</span>
          </a>
          <a href="mailto:cto@hexlabs.tech">
            <FontAwesomeIcon icon={faEnvelope} style={{ margin: "0 0.5rem" }} />
            cto@hexlabs.tech
          </a>
          <a href="#">
            <FontAwesomeIcon
              icon={faLocationDot}
              style={{ margin: "0 0.5rem" }}
            />
            Arat Kilo, Addis Ababa, Ethiopia
          </a>
        </div>
        <div className="top-right d-none d-md-block">
          <div className="social-pages">
            <a href="#">
              <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} aria-hidden="true" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
