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
// const breed = "golden retriever";
const apiKey = 'HvKs7iQXKzjn7CZzWg2qmA==wrsKN7snFLYJDUvM';




// loads the picture from dog ceo
async function dogPicture(breed) {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/4`);
    const dogpic = await response.json();
    console.log(dogpic);
    document.getElementById('image1').src = dogpic.message[0]
    document.getElementById('image2').src = dogpic.message[1]
    document.getElementById('image3').src = dogpic.message[2]
    document.getElementById('image4').src = dogpic.message[3]
}

// function dogPicture1(breed){
//     return fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`, {
//         method: 'GET',
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Request failed');
//         }
//         console.log(response)
//         return response;
//     })
//     .then(result => {      
//         return result; // Return the result for further processing if needed
// })}

const myform = document.getElementById("myform");

function dogstats(breed) {
    
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

// Alters stats, and picture on the main page based on breed selected and parsed
// through the dogstats function
function createdogCard(data, breed){
    // Code to be deleted later
    const breedName = data[0].name
    const averageLifeExpec = (data[0].max_life_expectancy +data[0].min_life_expectancy) / 2
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

    sheddingId.style.width = `${(data[0].shedding * 20)}%`
    barkingId.style.width = `${(data[0].barking * 20)}%`
    energyId.style.width = `${(data[0].energy * 20)}%`
    protectivenessId.style.width = `${(data[0].protectiveness * 20)}%`
    trainabilityId.style.width = `${(data[0].trainability * 20)}%`
    groomingID.style.width = `${(data[0].grooming * 20)}%`
    goodWDId.style.width = `${(data[0].good_with_other_dogs * 20)}%`
    goodWCId.style.width = `${(data[0].good_with_children * 20)}%`
    goodWSId.style.width = `${(data[0].good_with_strangers * 20)}%`

    console.log(breed)

    dogPicture(breed)

}


test.addEventListener('submit', function(event) {
    event.preventDefault();
    const breed = document.getElementById('breedSelect').value
    console.log(breed)

    dogstats(breed)
    .then(data => {
        console.log(data);// Log the data when the promise resolves
        createdogCard(data, breed); 
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

});

