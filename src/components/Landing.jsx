import React, { useState } from "react";
import UndrawBooks from "../assets/undraw_home-cinema_jdm1.svg";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSearchChange(e) {
    setSearchTerm(e.target.value);
  }

  function handleSearch() {
    const trimmed = searchTerm.trim();
    if (trimmed !== "") {
      navigate(`/movies?search=${encodeURIComponent(trimmed)}`);
    }
  }

  // ✅ Trigger search when user presses Enter
  function handleKeyDown(e) {
    if (e.key === "Enter") {
      e.preventDefault(); // prevents form submission/reload
      handleSearch();
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

            <div className="search__container">
              <input
                className="input"
                placeholder="Search movies"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyDown={handleKeyDown} // 👈 This enables Enter key search
              />
              <button className="btn click" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>

          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="Cinema illustration" />
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
