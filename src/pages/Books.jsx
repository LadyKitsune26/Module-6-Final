import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Book from "../components/Book";
import { fetchMovies } from "../components/data";

const Books = () => {
  const [books, setBooks] = useState([]);
  const location = useLocation();

  // Extract `search` query from URL
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get("search") || "avengers";

  useEffect(() => {
    console.log("Searching for:", searchTerm);

    fetchMovies(searchTerm)
      .then((data) => {
        console.log("API raw data:", data);

        if (data?.Response === "False") {
          console.warn("OMDb Error:", data.Error);
          setBooks([]);
          return;
        }

        const results = Array.isArray(data?.Search) ? data.Search : [];
        const formatted = results.map((movie) => ({
          imdbID: movie.imdbID,
          Title: movie.Title,
          Poster: movie.Poster,
          Year: movie.Year,
        }));

        setBooks(formatted);
      })
      .catch((e) => console.error("Fetch error:", e));
  }, [searchTerm]); // ✅ re-run when search term changes

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  Search Results for “{searchTerm}”
                </h2>
              </div>
              <div className="books">
                {books.length > 0 ? (
                  books.map((book) => <Book key={book.imdbID} book={book} />)
                ) : (
                  <p>No results found.</p>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
