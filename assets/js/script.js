
const myform = document.getElementById('myform')


myform.addEventListener("submit", function(event) {
    event.preventDefault();

    dogstats()
    .then(data => {
        console.log(data); // Log the data when the promise resolves
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

});

// api details
const breed = 'golden retriever';
const apiKey = 'HvKs7iQXKzjn7CZzWg2qmA==wrsKN7snFLYJDUvM';

function dogstats() {
  return fetch(`https://api.api-ninjas.com/v1/dogs?name=${breed}`, {
      method: 'GET',
      headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Request failed');
      }
      return response.json();
  })
  .then(result => {
      console.log(result);
      
      return result; // Return the result for further processing if needed
  })
  .catch(error => {
      console.error('Error:', error.message);
  });
}

const options = {
  indicators: true,
};

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".slider");
  const instances = M.Slider.init(elems, options);
});

