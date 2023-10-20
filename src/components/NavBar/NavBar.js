import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Dropdown from "./Dropdown";
import { auth } from "../../firebase/firebase";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const handleLogOut = () => {
    auth.signOut();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return function () {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`nav${scrolled ? " nav--scrolled" : ""}`}>
      <div className="nav--left">
        <img
          className="nav_logo"
          src={require("../../image/580b57fcd9996e24bc43c529.png")}
        />
        <ul className="nav__list">
          {/* without valid hrefs on anchor tags, react wants buttons. That's why these links had to be buttons */}
          <li className="nav__item">
            <button className="nav__link nav__link--selected">Home</button>
          </li>
          <li className="nav__item">
            <button className="nav__link">TV Shows</button>
          </li>
          <li className="nav__item">
            <button className="nav__link">Movies</button>
          </li>
          <li className="nav__item">
            <button className="nav__link">New & Popular</button>
          </li>
          <li className="nav__item">
            <button className="nav__link">My List</button>
          </li>
        </ul>
      </div>
      <div className="nav--right">
        <ul className="nav__list--right">
          <li className="nav__item">
            <i className="fas fa-search"></i>
          </li>
          <li className="nav__item">
            <span>KIDS</span>
          </li>
          <li className="nav__item">
            <i className="fas fa-gift"></i>
          </li>
          <li className="nav__item">
            <i className="fas fa-bell"></i>
          </li>
          <div className="nav__item">
            <div className="dropdown" onClick={handleToggleDropdown}>
              <img
                className="nav_avatar"
                src={require("../../image/Netflix-avatar.png")}
                alt="Avatar"
              />
              {showDropdown && <Dropdown onLogout={handleLogOut} />}
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
