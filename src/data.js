// FAKE DATA
 
export const books = new Promise(() => {
  fetch(
    "https://www.omdbapi.com/?apikey=3dd6eeee&s=avengers"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data;
    })
    .catch((error) => console.log(error));
});
    


export default books