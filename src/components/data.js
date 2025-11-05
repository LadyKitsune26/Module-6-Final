// FAKE DATA
 

const YOUR_KEY = '3dd6eeee';

export const fetchMovies = (searchTerm) => {
  return fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${YOUR_KEY}`)
    .then((res) => res.json());
};

export const fetchMovieById = async (id) => {
  const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${YOUR_KEY}&plot=full`);
  const data = await response.json();
  return data;
};
    

