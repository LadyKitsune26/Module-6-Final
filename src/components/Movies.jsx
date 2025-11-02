import React, { useState, useEffect } from "react";
import Book from "./Book";

function fetchMovies(searchTerm) {
    return fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=3dd6eeee`)
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