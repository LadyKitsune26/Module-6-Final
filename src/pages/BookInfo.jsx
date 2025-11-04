import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Ratings from "../components/ui/Ratings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fetchMovieById } from "../components/data"; // new helper function

const BookInfo = ({ addItemToCart }) => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getMovie() {
      try {
        setLoading(true);
        const data = await fetchMovieById(id);
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        setLoading(false);
      }
    }
    getMovie();
  }, [id]);

  if (loading) return <p>Loading movie details...</p>;
  if (!movie) return <p>Movie not found.</p>;

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/movies" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/movies" className="book__link">
                <h2 className="book__selected--title--top">Movies</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img
                  className="book__selected--img"
                  src={movie.Poster}
                  alt={movie.Title}
                />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{movie.Title}</h2>
                <Ratings rating={movie.imdbRating} />
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">{movie.Plot}</p>
                  <p className="book__summary--para">
                    Genre: {movie.Genre} | Director: {movie.Director} | Actors:{" "}
                    {movie.Actors}
                  </p>
                  <p className="book__summary--para">BoxOffice: {movie.BoxOffice}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BookInfo;
