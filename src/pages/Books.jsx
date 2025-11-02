import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import { fetchMovies } from "../components/data";

const Books = ({ searchTerm = "avengers", initialBooks = [] }) => {
  const [books, setBooks] = useState(initialBooks);

  useEffect(() => {
    if (!searchTerm) return;
    console.log("Fetching movies for:", searchTerm);

    fetchMovies(searchTerm)
      .then((data) => {
        console.log("OMDb data:", data);

        const results = Array.isArray(data?.Search) ? data.Search : [];
        const formatted = results.map((movie) => ({
          imdbID: movie.imdbID,
          Title: movie.Title,
          Poster: movie.Poster,
          Rating: 0,
          originalPrice: 0,
          salePrice: null,
          Year: movie.Year,
          BoxOffice: movie.BoxOffice,
        }));

        setBooks(formatted);
      })
      .catch((e) => console.error("Fetch error:", e));
  }, [searchTerm]);

  function filterBooks(filter) {
    switch (filter) {
      case "OLD_TO_NEW":
        return setBooks([...books].sort((a, b) => (a.Year || 0) - (b.Year || 0)));
      case "NEW_TO_OLD":
        return setBooks([...books].sort((a, b) => (b.Year || 0) - (a.Year || 0)));
      default:
        break;
    }
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <section>
          <div className="books__container">
            <div className="row">
              <div className="books__header">
                <h2 className="section__title books__header--title">
                  Search Movies
                </h2>
                <select
                  id="filter"
                  onChange={(e) => filterBooks(e.target.value)}
                  defaultValue="DEFAULT"
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="OLD_TO_NEW">Year, Old to New</option>
                  <option value="NEW_TO_OLD">Year, New to Old</option>
                </select>
              </div>
              <div className="books">
                {Array.isArray(books) && books.map((book) => (
                  <Book book={book} key={book.imdbID} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
