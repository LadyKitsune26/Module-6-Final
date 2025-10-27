
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/2208.q703.031.F.m004.c7.FP movie film cinema poster banner.jpg"

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row row__column">
          <Link to="/">
            <figure className="footer__logo">
              <img src={Logo} className="footer__logo--img" alt="" />
            </figure>
          </Link>
          <div className="footer__list">
            <Link to="/" className="footer__link">
              Home
            </Link>
            <span className="footer__link no-cursor">About</span>
            <Link to="/books" className="footer__link">
              Movies
            </Link>
          </div>
          <div className="footer__copyright">Copyright &copy; 2025 VisualAdventure</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
