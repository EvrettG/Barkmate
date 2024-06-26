// list of variables taken fom the index.html and used throughout the javascript code
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
const breedNameId = document.getElementById("breedName")
const averageLifeId = document.getElementById("averageLife")
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const confirmBtn = document.getElementById("confirmBtn");
// api key for api ninjas
const apiKey = "HvKs7iQXKzjn7CZzWg2qmA==wrsKN7snFLYJDUvM";


//---------------------Save Button Function-------------------------------
// getting the save button from the DOM
const saveBtn = document.querySelector("button[type='save']");
const savedBreedEl = document.getElementById("saved-breed");

// Removes the last part of hyphenated breed
function removeAfterDash(breed) {
  return breed.split('-').shift();
}
// Removes the first part of hyphenated breed
function removeBeforeDash(breed){
  return breed.split('-').pop();
}
// used to capitlizes the first character of a string
function capitalizeTarget(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


// function for the save button
function handleSave(e, breed) {
  
  savedBreedEl.style.display = "block";
  e.preventDefault();

  const selectBreed = document.getElementById("breedSelect");
  const selectedOption = selectBreed.options[selectBreed.selectedIndex];
  const selectedValue = selectedOption.value;
  const savedBreeds = JSON.parse(localStorage.getItem("savedBreeds")) ||  [];
  if(savedBreeds.includes(selectedValue)){
    modal.style.display = "block";
    return;
  } else {
    console.log(false)
  }

  // Saves the selected breed to local storage
  saveBreedLocalstorage(selectedValue);

  const anchor = document.createElement("a");
  anchor.className = "collection-item";
  anchor.textContent = selectedValue;
  breed = anchor.textContent
// 
  anchor.addEventListener("click", function() {
    console.log(breed)
    dogPicture(breed);
    dogstats(breed)
    .then(data => {
        console.log(data);// Log the data when the promise resolves
        createdogCard(data, breed);     
    })
  })
// The delete button
  const icon = document.createElement("i");
  icon.className = "material-icons right";
  icon.textContent = "delete";

  icon.addEventListener("click", function() {
    event.stopPropagation();
    // saved breeds must be loaded again to after the breed is added so that the function can recognise the updated list
    const savedBreeds = JSON.parse(localStorage.getItem("savedBreeds")) ||  [];
    const index = savedBreeds.indexOf(breed);
    console.log(breed)
    console.log(savedBreeds)
    console.log(index)
    if (index > -1) {
      savedBreeds.splice(index, 1);
      localStorage.setItem("savedBreeds", JSON.stringify(savedBreeds));
    }
    savedBreedEl.removeChild(anchor);
  });

  anchor.append(icon);

  savedBreedEl.append(anchor);
}

saveBtn.addEventListener("click", handleSave);
// ----------------------------------------------------------------------------

// loads the picture from dog ceo

async function dogPicture(breed, ) {
  breedUrl = breed.replace(/-/g, '/');
      const response = await fetch(`https://dog.ceo/api/breed/${breedUrl}/images/random/4`);
      const dogpic = await response.json();
      // console.log(dogpic);
      document.getElementById('image1').src = dogpic.message[0]
      document.getElementById('image2').src = dogpic.message[1]
      document.getElementById('image3').src = dogpic.message[2]
      document.getElementById('image4').src = dogpic.message[3]
          
}
// gets the stats from the apiNinja
function dogstats(breed) {
  console.log(breed)
  breedUrl = removeAfterDash(breed);
  console.log(breedUrl)
  return fetch(`https://api.api-ninjas.com/v1/dogs?name=${breedUrl}`, {
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
      // console.log(result);

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

// Alters statson the main page based on breed selected and parsed
// through the dogstats function
function createdogCard(data, breed){

  let x = 0
  if (breed.includes("-")){
   const target = removeBeforeDash(breed)
   console.log(target)
   let cTarget = capitalizeTarget(target)
   console.log(cTarget)
   const foundObject = data.findIndex(obj => obj.name.includes(cTarget));
   console.log(foundObject)
   x = foundObject
  } 
  console.log(breed)
  console.log(x)
    breedNameId.textContent = `${(data[x].name)}`
    averageLifeId.textContent = `This breed lives between ${(data[x].min_life_expectancy)} and ${(data[x].max_life_expectancy)} years`
    sheddingId.style.width = `${(data[x].shedding * 20)}%`
    barkingId.style.width = `${(data[x].barking * 20)}%`
    energyId.style.width = `${(data[x].energy * 20)}%`
    protectivenessId.style.width = `${(data[x].protectiveness * 20)}%`
    trainabilityId.style.width = `${(data[x].trainability * 20)}%`
    groomingID.style.width = `${(data[x].grooming * 20)}%`
    goodWDId.style.width = `${(data[x].good_with_other_dogs * 20)}%`
    goodWCId.style.width = `${(data[x].good_with_children * 20)}%`
    goodWSId.style.width = `${(data[x].good_with_strangers * 20)}%`    
}

// function that, upon pressing submit, will get the selected dog breed and run it through
// the function to produce appropiate stats and picture's
test.addEventListener('submit', function(event) {
    event.preventDefault();
    let breed = document.getElementById('breedSelect').value

    dogPicture(breed,)
    dogstats(breed,)   
    .then(data => {
        console.log(data);// Log the data when the promise resolves
        createdogCard(data, breed); 
    })
    .catch((error) => {
      console.error("Error:", error.message);
    });
});

// saves breed to local storage and creates an array if needed
function saveBreedLocalstorage(breed) {
  const savedBreeds = JSON.parse(localStorage.getItem("savedBreeds")) || [];
  // this makes it so there are no duplicates in breeds saved
  if (!savedBreeds.includes(breed)) {
    savedBreeds.push(breed);
    localStorage.setItem("savedBreeds", JSON.stringify(savedBreeds));
  }
}

// makes page reload have the saved breed list
function displaySavedbreeds() {
  const savedBreeds = JSON.parse(localStorage.getItem("savedBreeds")) ||  [];
  const savedBreedEl = document.getElementById("saved-breed");

  savedBreedEl.innerHTML = '';

  savedBreeds.forEach(function(breed){
    const listItem = document.createElement("li");
    listItem.className = "collection-item";

    const anchor = document.createElement("a");
    anchor.textContent = breed;
    
    // Dog breed text acts as button for function
    anchor.addEventListener("click", function() {
      breed = anchor.textContent;
      console.log(breed)
      dogPicture(breed);
      dogstats(breed)
      .then(data => {
          console.log(data);// Log the data when the promise resolves
          createdogCard(data, breed);     
      })
    })

// icon is the delete button
    const icon = document.createElement("i");
    icon.className = "material-icons right delete-button";
    icon.textContent = "delete";

    icon.addEventListener("click", function() {
      event.stopPropagation();
      const index = savedBreeds.indexOf(breed);
      console.log(breed)
      console.log(savedBreeds)
      console.log(index)
      if (index > -1) {
        savedBreeds.splice(index, 1);
        localStorage.setItem("savedBreeds", JSON.stringify(savedBreeds));
      }
      savedBreedEl.removeChild(listItem);
    });
    // listItem.appendChild(anchor);
    listItem.appendChild(anchor);
    listItem.appendChild(icon);
    savedBreedEl.appendChild(listItem);
  });
}

document.addEventListener("DOMContentLoaded", function(){
  displaySavedbreeds();

});

// code to make the modal disapear

window.onclick = function(event) {
  if (event.target == modal) {
      modal.style.display = "none";
  }
}

confirmBtn.onclick = function() {
  modal.style.display = "none";
}
