import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Price from "./ui/Price";
import Ratings from "./ui/Ratings";
import Year from "./ui/Year";

const Book = ({ book }) => {
  const [img, setImg] = useState();

  // When we switch routes dont set image to unmounted component
  const mountedRef = useRef(true);

  useEffect(() => {
    const image = new Image();
    image.src = book.Poster;
    image.onload = () => {
      setTimeout(() => {
        if (mountedRef.current) {
          setImg(image);
        }
      }, 300);
    };
    return () => {
      // When the component unmounts
      mountedRef.current = false;
    };
  }, [book.Poster]);

  return (
    <div className="book">
      {!img ? (
        <>
          <div className="book__img--skeleton"></div>
          <div className="skeleton book__title--skeleton"></div>
          <div className="skeleton book__rating--skeleton"></div>
          <div className="skeleton book__price--skeleton"></div>
        </>
      ) : (
        <>
          <Link to={`/books/${book.imdbID}`}>
            <figure className="book__img--wrapper">
              <img className="book__img" src={img.src} alt="" />
            </figure>
          </Link>
          <div className="book-book__title" key={book.imdbID}>
            <Link to={`/movies/${book.imdbID}`}>
              <img
                src={book.Poster}
                alt={book.Title}
                className="book__title--link"
              />
            </Link>
            <h3>{book.Title}</h3>
          </div>
          <Ratings rating={book.Rating} />
          <Year>{book.Year}</Year>
          {/* <Price
            originalPrice={book.originalPrice}
            salePrice={book.salePrice}
          /> */}
        </>
      )}
    </div>
  );
};

export default Book;
