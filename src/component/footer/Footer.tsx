import "./Footer.scss";

import { FaGithubSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { ImLinkedin } from "react-icons/im";

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
            <IoMdMail size={30} color="#000" />
          </a>
          <a
            href="https://www.linkedin.com/in/robin-sahin-15404a24b/"
            className="footer_linkBox--linkedIn"
            target="_blank"
          >
            <ImLinkedin size={30} color="#000" />
          </a>
          <a
            href="https://github.com/r0binsahin"
            className="footer_linkBox--github"
            target="_blank"
          >
            <FaGithubSquare size={30} color="#000" />
          </a>
        </div>
      </footer>
    </>
  );
};
