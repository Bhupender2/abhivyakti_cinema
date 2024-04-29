import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top"); // scrolling effect of the menu
  const [lastScrollY, setLastScrollY] = useState(0); // with these two states we achieve the scroll effect in the header menu
  const [mobileMenu, setMobileMenu] = useState(false); // show and hide the mobile menu it also depend on the state
  const [query, setQuery] = useState(""); // here also the serach bar same as in the desktop version ( this will be used in mobile version)
  const [showSearch, setShowSearch] = useState(""); // on click it will show the search input in the mobile version
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="header">
      {/* here we are using semantic tag for seo */}
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="logo_image" />
        </div>
        <ul className="menuItems">
          <li className="menuItem">Movies</li>
          <li className="menuItem">TV Shows</li>
          <li className="menuItem">
            <HiOutlineSearch />
          </li>
        </ul>
      </ContentWrapper>
    </header>
  );
};

export default Header;
