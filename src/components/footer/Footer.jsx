import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a
              href="https://github.com/Bhupender2"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit"}}
            >
              <FaGithub />
            </a>
          </span>
          <span className="icon">
            <a href="mailto:b.mehtaa2021@gmail.com" target="_blank" rel="noopener noreferrer" style={{ color: "inherit"}}>
              <SiGmail />
            </a>
          </span>
          <span className="icon">
            <a href="https://twitter.com/Bhupender_Codes" target="_blank" rel="noopener noreferrer" style={{ color: "inherit"}}>
              <FaTwitter />
            </a>
          </span>
          <span className="icon">
            <a
              href="https://www.linkedin.com/in/bhupender-mehta-661331226/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit"}}
            >
              <FaLinkedin />
            </a>
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
