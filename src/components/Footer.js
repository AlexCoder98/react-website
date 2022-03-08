import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <h3>Find us on Social Media</h3>
      <div className="media">
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faYoutube} />
        <FontAwesomeIcon icon={faFacebook} />
        <FontAwesomeIcon icon={faLinkedin} />
      </div>
      <p>All rights reserved &copy;</p>
    </footer>
  );
};

export default Footer;
