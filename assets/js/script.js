const test = document.getElementById('test')
const sheddingId = document.getElementById('shedding')
const barkingId = document.getElementById('barking')
const energyId = document.getElementById('energy')
const protectivenessId = document.getElementById('protectiveness')
const playfulnessId = document.getElementById('playfulness')
const trainabilityId = document.getElementById('trainability')
const goodWCId = document.getElementById('goodWC')
const goodWSId = document.getElementById('goodWS')
const goodWDId = document.getElementById('goodWD')
const groomingID = document.getElementById('grooming')



// api details
// const breed = 'Husky';

const apiKey = 'HvKs7iQXKzjn7CZzWg2qmA==wrsKN7snFLYJDUvM';




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

const myform = document.getElementById("myform");

myform.addEventListener("submit", function (event) {
  event.preventDefault();

  dogstats()
    .then((data) => {
      console.log(data); // Log the data when the promise resolves

    })
    .catch((error) => {
      console.error("Error:", error.message);
    });

  }

// loads the stats from the api ninjas
function dogstats(breed) {

});

// api details
const breed = "golden retriever";
const apiKey = "HvKs7iQXKzjn7CZzWg2qmA==wrsKN7snFLYJDUvM";

function dogstats() {

  return fetch(`https://api.api-ninjas.com/v1/dogs?name=${breed}`, {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Request failed");
      }
      return response.json();
    })
    .then((result) => {
      console.log(result);

      return result; // Return the result for further processing if needed
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
}

// Slider related Javascript
const options = {
  indicators: true,
  height: 450,
};

document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".slider");
  const instances = M.Slider.init(elems, options);
});

function createdogCard(data){
    const breedName = data[0].name
    const averageLifeExpec = (data[0].max_life_expectancy +data[0].min_life_expectancy) / 2
    console.log(averageLifeExpec)
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

    sheddingId.style.width = `${(shedding * 20)}%`
    barkingId.style.width = `${(barking * 20)}%`
    energyId.style.width = `${(energy * 20)}%`
    protectivenessId.style.width = `${(protectiveness * 20)}%`
    trainabilityId.style.width = `${(trainability * 20)}%`
    groomingID.style.width = `${(grooming * 20)}%`
    goodWDId.style.width = `${(goodDogs * 20)}%`
    goodWCId.style.width = `${(goodKids * 20)}%`
    goodWSId.style.width = `${(goodStangers * 20)}%`

}


test.addEventListener('submit', function(event) {
    event.preventDefault();
    const breed = document.getElementById('breedSelect').value
    console.log(breed)

    dogstats(breed)
    .then(data => {
        console.log(data);// Log the data when the promise resolves
        console.log(data[0].barking);
        createdogCard(data); 
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

});

