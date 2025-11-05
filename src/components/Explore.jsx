import React, { useState } from "react";
import { fetchMovies } from "./data";
import { Link } from "react-router-dom";

const Explore = () => {
  const [movies, setMovies] = useState([]);

  const popularTerms = ["avengers", "batman", "superman", "spiderman", "star wars"];

  const handleExploreClick = async () => {
    try {
      const allResults = await Promise.all(
        popularTerms.map((term) => fetchMovies(term))
      );

      // Merge and flatten all movie results
      const merged = allResults
        .flatMap((data) => data?.Search || [])
        // Remove duplicates by imdbID
        .filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.imdbID === movie.imdbID)
        );

      setMovies(merged);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <section id="explore">
      <div className="container">
        <div className="row row__column">
          <h2>
            Explore more <span className="purple">Movies</span>
          </h2>
          <button className="btn" onClick={handleExploreClick}>
            Explore movies
          </button>
          <Link>
            <div className="movies-grid">
              {movies.length > 0 &&
                movies.map((movie) => (
                  <div key={movie.imdbID} className="movie-card">
                    <img src={movie.Poster} alt={movie.Title} />
                    <h3>{movie.Title}</h3>
                  </div>
                ))}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Explore;
