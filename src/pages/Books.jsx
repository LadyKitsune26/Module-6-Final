import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import { books as bookPromise } from "../components/data";
import { fetchMovies } from "../components/data";



const Books = ({ books: initialBooks }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
  async function getMovies() {
    const data = await fetchMovies("avengers"); // you can replace "avengers" with the actual search term later
    console.log(data);
  }

  getMovies();
}, []);

    useEffect(() => {
    fetchMovies("avengers")
      .then((data) => {
        // Safety logs
        console.log("OMDb data:", data);
        const results = Array.isArray(data?.Search) ? data.Search : [];

        // IMPORTANT: Use the exact keys Book.jsx expects
        const formatted = results.map((movie) => ({
          imdbID: movie.imdbID,
          Title: movie.Title,
          Poster: movie.Poster,
          // The search endpoint doesn't return imdbRating; use 0 for now
          Rating: 0,
          originalPrice: 29.99,
          salePrice: null,
          Year: movie.Year,
          BoxOffice: movie.BoxOffice
        }));

        setBooks(formatted);
      })
      .catch((e) => console.error("Fetch error:", e));
  }, []);

  useEffect(() => {
    setBooks(initialBooks);
  }, [initialBooks]);

  function filterBooks(filter) {
    console.log("Filter applied:", filter)
    switch (filter) {
      case "OLD_TO_NEW":
        console.log("Sorting from old to new")
        return setBooks(
          books
            .slice()
            .sort(
              (a, b) =>
                (a.Year || 0) -
                (b.Year || 0)
            )
        );
      case "NEW_TO_OLD":
         console.log("Sorting from new to old")
        return setBooks(
          books
            .slice()
            .sort(
              (a, b) =>
                (b.Year || 0) -
                (a.Year || 0)
            )
        );
      // case "RATING":
      //   console.log("Sorting by rating")
      //   return setBooks(books.slice().sort((a, b) => b.Rating - a.Rating));
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
                  onChange={(event) => filterBooks(event.target.value)}
                  defaultValue={"DEFAULT"}
                >
                  <option value="DEFAULT" disabled>
                    Sort
                  </option>
                  <option value="OLD_TO_NEW">Year, Old to New</option>
                  <option value="NEW_TO_OLD">Year, New to Old</option>
                  {/* <option value="RATING">Rating</option> */}
                </select>
              </div>
              <div className="books">
                {Array.isArray(books) && books.map((book) => {
                  return <Book book={book} key={book.imdbID} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Books;
