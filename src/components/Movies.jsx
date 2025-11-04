import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchMovies } from "../components/data";

function Movies() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract search query from URL
  const params = new URLSearchParams(location.search);
  const searchTerm = params.get("search") || "avengers"; // default fallback

  useEffect(() => {
    if (!searchTerm) return;

    fetchMovies(searchTerm)
      .then((data) => {
        const results = Array.isArray(data?.Search) ? data.Search : [];
        setMovies(results);
      })
      .catch((e) => console.error("Fetch error:", e));
  }, [searchTerm]);

  const handleClick = (imdbID) => {
    navigate(`/movies/${imdbID}`);
  };

  return (
    <div className="movies-page">
      <h1>Search Results for "{searchTerm}"</h1>
      <div className="movies-grid">
        {movies.length === 0 && <p>No results found.</p>}
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="movie-card"
            onClick={() => handleClick(movie.imdbID)}
            style={{ cursor: "pointer" }}
          >
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;