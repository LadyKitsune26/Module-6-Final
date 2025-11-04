import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { fetchMovies } from "../components/data";

function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchTerm = params.get("search") || "avengers"; // fallback
    fetchMovies(searchTerm).then((data) => {
      if (data.Search) setMovies(data.Search);
    });
  }, [location.search]);

  return (
    <div className="movies-page">
      <h1>Movies</h1>
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;