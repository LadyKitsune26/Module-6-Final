import React from "react";
import { Link } from "react-router-dom";

const MoviesGrid = ({ movies }) => {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <Link key={movie.imdbID} to={`/movies/${movie.imdbID}`}>
          <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
            <h3 className="movie-title">{movie.Title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MoviesGrid;