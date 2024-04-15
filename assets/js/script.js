const test = document.getElementById('test')


// api details
const breed = 'Husky';

const apiKey = 'HvKs7iQXKzjn7CZzWg2qmA==wrsKN7snFLYJDUvM';

const apiUrl = `https://dog.ceo/api/breed/${breed}/images/random`


// loads the picture from dog ceo
function dogPicture(){
    return fetch(`https://api.api-ninjas.com/v1/dogs?name=${breed}`, {
        method: 'GET',
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Request failed');
        }
        return response;
    })
    .then(result => {
        console.log(result);
        
        return result; // Return the result for further processing if needed
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
  }

// loads the stats from the api ninjas
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

function createdogCard(data){
    const dogCard = document.createElement('div');
    const breedName = document.createElement('h3');
    const averageLifeExpec = document.createElement('h4');

    const barking = data[0].barking
    const coatLength = data[0].coat_length
    const drooling = [0].drooling
    const energy = data[0].energy
    const goodKids = data[0].good_with_children
    const goodDogs = data[0].good_with_other_dogs
    const goodStangers = data[0].good_with_strangers
    const grooming = data[0].grooming
    const playFulness = data[0].playfulness
    const protectiveness = data[0].protectiveness
    const shedding = data[0].shedding
    const trainability = data[0].trainability

}


test.addEventListener('click', function(event) {
    event.preventDefault();

    dogstats()
    .then(data => {
        console.log(data);// Log the data when the promise resolves
        console.log(data[0].barking);
        createdogCard(data); 
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

});