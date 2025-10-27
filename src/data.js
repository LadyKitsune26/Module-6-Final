// FAKE DATA
export const books =  
[
 fetch("https://www.omdbapi.com/?t=Guardians+of+the+Galaxy+Vol.+2&apikey=3dd6eeee")
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
]

export default books