const test = document.getElementById("test");
const sheddingId = document.getElementById("shedding");
const barkingId = document.getElementById("barking");
const energyId = document.getElementById("energy");
const protectivenessId = document.getElementById("protectiveness");
const playfulnessId = document.getElementById("playfulness");
const trainabilityId = document.getElementById("trainability");
const goodWCId = document.getElementById("goodWC");
const goodWSId = document.getElementById("goodWS");
const goodWDId = document.getElementById("goodWD");
const groomingID = document.getElementById("grooming");

//---------------------Save Button Function-------------------------------
// getting the save button from the DOM
const saveBtn = document.querySelector("button[type='save']");
const savedBreedEl = document.getElementById("saved-breed");

function handleSave(e) {
  savedBreedEl.style.display = "block";
  e.preventDefault();

  const selectBreed = document.getElementById("breedSelect");
  const selectedOption = selectBreed.options[selectBreed.selectedIndex];
  const selectedValue = selectedOption.value;

  const anchor = document.createElement("a");
  anchor.href = "#";
  anchor.className = "collection-item";
  anchor.textContent = selectedValue;

  const icon = document.createElement("i");
  icon.className = "material-icons right";
  icon.textContent = "delete";

  anchor.append(icon);

  savedBreedEl.append(anchor);
}

saveBtn.addEventListener("click", handleSave);
// ----------------------------------------------------------------------------

// api details
// const breed = 'Husky';
// const breed = "golden retriever";
const apiKey = "HvKs7iQXKzjn7CZzWg2qmA==wrsKN7snFLYJDUvM";

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
    sheddingId.style.width = `${(data[0].shedding * 20)}%`
    barkingId.style.width = `${(data[0].barking * 20)}%`
    energyId.style.width = `${(data[0].energy * 20)}%`
    protectivenessId.style.width = `${(data[0].protectiveness * 20)}%`
    trainabilityId.style.width = `${(data[0].trainability * 20)}%`
    groomingID.style.width = `${(data[0].grooming * 20)}%`
    goodWDId.style.width = `${(data[0].good_with_other_dogs * 20)}%`
    goodWCId.style.width = `${(data[0].good_with_children * 20)}%`
    goodWSId.style.width = `${(data[0].good_with_strangers * 20)}%`

    dogPicture(breed)


}

test.addEventListener("submit", function (event) {
  event.preventDefault();
  const breed = document.getElementById("breedSelect").value;
  console.log(breed);


test.addEventListener('submit', function(event) {
    event.preventDefault();
    const breed = document.getElementById('breedSelect').value
    console.log(breed)

    dogstats(breed)
    .then(data => {
        console.log(data);// Log the data when the promise resolves
        createdogCard(data, breed); 

    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});
})