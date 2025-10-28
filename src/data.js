// FAKE DATA
 
export const books = new Promise(() => {
  fetch(
    "https://www.omdbapi.com/?t=Guardians+of+the+Galaxy+Vol.+2&apikey=3dd6eeee"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return data;
    })
    .catch((error) => console.log(error));
});
    


export default books