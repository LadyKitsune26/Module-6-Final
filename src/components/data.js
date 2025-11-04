// FAKE DATA
 

export const fetchMovies = (searchTerm) => {
  return fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=3dd6eeee`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};

// Fetch a single movie by IMDb ID
export const fetchMovieById = (imdbID) => {
  return fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=YOUR_KEY`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.error(err));
};
    

