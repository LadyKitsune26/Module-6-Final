
import React from "react";
import UndrawBooks from "../assets/undraw_home-cinema_jdm1.svg";


// function searchChange(event){
//     renderMovies(event.target.value)
// }

// let currentMovies = []

// async function renderMovies(searchTerm){
//     console.log(`This is the searchTerm`,searchTerm);
// const response = await fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=3dd6eeee`)
// const data = await response.json();
// currentMovies = data.Search;
//     displayMoives(currentMovies)
// }

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
              <input className="input" placeholder="Browse movies" type="text" ></input><button className="btn click" >Search</button>
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
