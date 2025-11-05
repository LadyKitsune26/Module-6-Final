import React, { useEffect, useState } from "react";
import { fetchMovies } from "./data";
import { Link } from "react-router-dom";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const popularTerms = ["avengers", "batman", "superman", "spiderman", "star wars"];

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const allResults = await Promise.all(
          popularTerms.map((term) => fetchMovies(term))
        );

        const merged = allResults
          .flatMap((data) => data?.Search || [])
          .filter(
            (movie, index, self) =>
              index === self.findIndex((m) => m.imdbID === movie.imdbID)
          );

        setMovies(merged);
      } catch (err) {
        console.error("Error fetching movies:", err);
      }
    };

    loadMovies();
  }, []);

  return (
    <section id="movies-list">
      <div className="container">
        <h2>Explore Popular Movies</h2>
        <div className="movies-grid">
          {movies.map((movie) => (
            <Link
              key={movie.imdbID}
              to={`/movies/${movie.imdbID}`}
              className="movie-card"
            >
              <img src={movie.Poster} alt={movie.Title} />
              <h3>{movie.Title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoviesList;