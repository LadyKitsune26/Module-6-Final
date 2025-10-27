import React, { useState, useEffect } from "react";
import Book from "../components/Book";

const Books = ({ books: initalBooks }) => {
  const [books, setBooks] = useState();

  useEffect(() => {
    setBooks(initalBooks);
  }, [initalBooks]);

  function filterBooks(filter) {
    switch (filter) {
      case "OLD_TO_NEW":
        return setBooks(
          books
            .slice()
            .sort(
              (a, b) =>
                (a.year || a.year) -
                (b.year || b.year)
            )
        );
      case "NEW_TO_OLD":
        return setBooks(
          books
            .slice()
            .sort(
              (a, b) =>
                (b.year || b.year) -
                (a.year || a.year)
            )
        );
      case "RATING":
        return setBooks(books.slice().sort((a, b) => b.rating - a.rating));
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
                  <option value="LOW_TO_HIGH">Year, Old to New</option>
                  <option value="HIGH_TO_LOW">Year, New to Old</option>
                  <option value="RATING">Rating</option>
                </select>
              </div>
              <div className="books">
                {books && books.map((book) => {
                  return <Book book={book} key={book.id} />;
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
