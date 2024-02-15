import "./Footer.scss";

import { PiGithubLogo } from "react-icons/pi";
import { IoMailOpenOutline } from "react-icons/io5";
import { SlSocialLinkedin } from "react-icons/sl";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__phoneBox">
          <p className="footer__phoneBox--name">Robin Sahin</p>
          <p className="footer__phoneBox--phone">+46722983593</p>
        </div>

        <div className="footer__linkBox">
          <a
            href="mailto:robin.sahin88@gmail.com"
            className="footer_linkBox--mail"
            target="_blank"
          >
            <IoMailOpenOutline size={30} color="#000" />
          </a>
          <a
            href="https://www.linkedin.com/in/robin-sahin-15404a24b/"
            className="footer_linkBox--linkedIn"
            target="_blank"
          >
            <SlSocialLinkedin size={30} color="#000" />
          </a>
          <a
            href="https://github.com/r0binsahin"
            className="footer_linkBox--github"
            target="_blank"
          >
            <PiGithubLogo size={30} color="#000" />
          </a>
        </div>
      </footer>
    </>
  );
};
