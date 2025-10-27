
import React from "react";
import UndrawBooks from "../assets/undraw_home-cinema_jdm1.svg";

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Find your next visual adventure</h1>
            <h2>
              What adventure awaits with <span className="purple">MovieAdventure</span>
            </h2>
            <a href="#features">
              <button className="btn">Browse movies</button>
            </a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
