import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation } from "react-router-dom";

import "./style.scss";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/movix-logo.svg";

const Header = () => {
  const [show, setShow] = useState("top"); // scrolling effect of the menu (top is a class in scss that we write on our own and it will change to hide and show on SCROLLING)
  const [lastScrollY, setLastScrollY] = useState(0); // with these two states we achieve the scroll effect in the header menu
  const [mobileMenu, setMobileMenu] = useState(false); // show and hide the mobile menu it also depend on the state
  const [query, setQuery] = useState(""); // here also the serach bar same as in the desktop version ( this will be used in mobile version)
  const [showSearch, setShowSearch] = useState(""); // on click it will show the search input in the mobile version
  const navigate = useNavigate();
  const location = useLocation();

  const controlNavbar = () => {
    console.log(window.scrollY);
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
      } else {
        setShow("show");
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      // only on enter we have to run the search query not like ki every key pe searchQuery run karahe h
      navigate(`/search/${query}`); // searchResults page pe jaana h apne ko
      setTimeout(() => {
        setShowSearch(false); //jab hum dusre page mein navigate karenge toh search Bar open hi reh jaaega vo vo khuse close hojaana chahiye toh uske liye setTimeout use kiya meine
      }, 1000);
    }
  };

  function openSearch() {
    setShowSearch(true);
    setMobileMenu(false);
  }
  function openMobileMenu() {
    setMobileMenu(true);
    setShowSearch(false);
  }
  function navigationHandler(type) {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  }

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      {/* here we are using semantic tag for seo */}
      <ContentWrapper>
        <div className="logo">
          <img src={logo} alt="logo_image" />
        </div>
        <ul className="menuItems">
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menuItem">
            <HiOutlineSearch onClick={openSearch} />
          </li>
        </ul>
        {/*  MOBILE MENU  */}
        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a movie or tv show..."
                onChange={(e) => setQuery(e.target.value)}
                onKeyUp={searchQueryHandler}
              />
              <VscChromeClose onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
};

export default Header;
