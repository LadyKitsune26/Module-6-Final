import React, { useState, useEffect } from "react";
import Book from "./Book";
import { fetchMovies } from "./data";

function fetchMovies(searchTerm) {
    return fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=3dd6eeee`)
.then((response) => response.json())
.then((data) => {
  console.log(data);
  return data;
})
.catch((error) => {
  console.log(error);
});
}

export { fetchMovies };