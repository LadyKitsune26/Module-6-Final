// FAKE DATA
 
export const books = new Promise((resolve, reject) => {
  fetch("https://www.omdbapi.com/?apikey=3dd6eeee&s=avengers")
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
    


export default books