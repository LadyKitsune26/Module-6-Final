// FAKE DATA
 

export const fetchMovies = (searchTerm) => {
  return fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=3d6eeeee`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
    

