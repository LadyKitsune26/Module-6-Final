import React, { useState, useEffect } from "react";
import { fetchMovies } from "../components/data";
import MoviesGrid from "../components/MoviesGrid";

const Books = ({ searchTerm = "avengers" }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!searchTerm) return;

    fetchMovies(searchTerm)
      .then((data) => {
        const results = Array.isArray(data?.Search) ? data.Search : [];
        const formatted = results.map((movie) => ({
          imdbID: movie.imdbID,
          Title: movie.Title,
          Poster: movie.Poster,
        }));
        setMovies(formatted);
      })
      .catch((err) => console.error(err));
  }, [searchTerm]);

  return (
    <div>
      <h2>Search Results for "{searchTerm}"</h2>
      <MoviesGrid movies={movies} />
    </div>
  );
};

export default Books;
