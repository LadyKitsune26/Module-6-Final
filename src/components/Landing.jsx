
import React, { useState } from "react";
import UndrawBooks from "../assets/undraw_home-cinema_jdm1.svg";
import { useNavigate } from "react-router-dom";


const Landing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearchClick() {
    if (searchTerm.trim() !== "") {
      navigate(`/movies?search=${searchTerm}`);
    }
  }
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>Find your next visual adventure</h1>
            <h2>
              What adventure awaits with{" "}
              <span className="purple">MovieAdventure</span>
            </h2>
            <a href="#features">
              <input
                className="input"
                placeholder="Browse movies"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button className="btn click" onClick={handleSearchClick}>
                Search
              </button>
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
