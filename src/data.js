// FAKE DATA
 
export const books = new Promise((resolve, reject) => {
  fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=3dd6eeee`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      resolve(data); // ✅ this makes sure the data is returned properly
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
});

export const fetchMovies = (searchTerm) => {
  return fetch(`http://www.omdbapi.com/?s=${searchTerm}&apikey=3dd6eeee`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
    


export default books