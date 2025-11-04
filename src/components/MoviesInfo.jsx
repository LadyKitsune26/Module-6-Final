import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const MoviesInfo = () => {
  const { id } = useParams(); // Movie ID from the URL
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchMovieDetails() {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?i=${id}&apikey=3dd6eeee&plot=full`
        );
        const data = await res.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!movie) return <p>Movie not found</p>;

  return (
    <div className="movie-info-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ← Back
      </button>

      <h1 className="movie-title">{movie.Title}</h1>

      <div className="movie-main">
        <img className="movie-poster" src={movie.Poster} alt={movie.Title} />

        <div className="movie-details">
          <p className="movie-plot">{movie.Plot}</p>
          <ul className="movie-meta">
            <li><strong>Year:</strong> <span className="movie__info--card">{movie.Year}</span></li>
            <li><strong>Genre:</strong> <span className="movie__info--card">{movie.Genre}</span></li>
            <li><strong>Director:</strong> <span className="movie__info--card">{movie.Director}</span></li>
            <li><strong>Actors:</strong> <span className="movie__info--card">{movie.Actors}</span></li>
            <li><strong>Box Office:</strong> <span>{movie.BoxOffice}</span></li>
            <li><strong>IMDB Rating:</strong> <span>{movie.imdbRating}</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MoviesInfo;