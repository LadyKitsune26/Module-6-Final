
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faTimes,
  faFilm,
  faHome,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";
import LibraryLogo from "../assets/2208.q703.031.F.m004.c7.FP movie film cinema poster banner.jpg";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += " menu--open";
  }

  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav className="nav">
      <div className="nav__container">
        {/* Logo & Brand */}
        <Link to="/" className="nav__logo-container">
          <img className="logo" src={LibraryLogo} alt="Cinema Logo" />
          <span className="nav__brand">
            <FontAwesomeIcon icon={faFilm} className="nav__brand-icon" />
            CineVerse
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="nav__links">
          <li className="nav__list">
            <Link to="/" className="nav__link">
              <FontAwesomeIcon icon={faHome} /> Home
            </Link>
          </li>
          <li className="nav__list">
            <Link to="/books" className="nav__link nav__link--primary">
              <FontAwesomeIcon icon={faClapperboard} /> Movies
            </Link>
          </li>
          <button className="btn__menu" onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </ul>

        {/* Mobile Menu */}
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link to="/" className="menu__link" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link to="/books" className="menu__link" onClick={closeMenu}>
                Movies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
