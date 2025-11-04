// FAKE DATA
 

const YOUR_KEY = '3dd6eeee';

export const fetchMovies = (searchTerm) => {
  return fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${YOUR_KEY}`)
    .then((res) => res.json());
};

export const fetchMovieById = (imdbID) => {
  return fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${YOUR_KEY}`)
    .then((res) => res.json());
};
    

