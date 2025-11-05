import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./components/Movies";
import MoviesInfo from "./components/MoviesInfo";
import { fetchMovies } from "./components/data";
import MoviesGrid from "./components/MoviesGrid";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Explore from "./components/Explore";
import MoviesList from "./components/MoviesList";


function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(book) {
    const dupeItem = cart.find((item) => item.id === book.id);
    setCart((oldCart) =>
      dupeItem
        ? [
            ...oldCart.map((item) => {
              return item.id === dupeItem.id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item;
            }),
          ]
        : [...oldCart, { ...book, quantity: 1 }]
    );
  }

  function updateCart(item, newQuantity) {
    setCart((oldCart) =>
      oldCart.map((oldItem) => {
        if (oldItem.id === item.id) {
          return {
            ...oldItem,
            quantity: newQuantity,
          };
        } else {
          return oldItem;
        }
      })
    );
  }

  function removeItem(item) {
    setCart((oldCart) => oldCart.filter((cartItem) => cartItem.id !== item.id));
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  function numberOfItems() {
    let counter = 0;
    cart.forEach((item) => {
      counter += +item.quantity;
    });
    return counter;
  }

  function calcPrices() {
    let total = 0;
    cart.forEach((item) => {
      total += (item.salePrice || item.originalPrice) * item.quantity;
    });
    return {
      subtotal: total * 0.9,
      tax: total * 0.1,
      total,
    };
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MoviesInfo />} />
          <Route path="/books" element={<MoviesList />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};



export default App;
