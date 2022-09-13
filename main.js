// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById("fish-btn");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;
let codSteve = 0.7;
let salSteve = 0.9;
let tropSteve = 0.95;
let codAlex = 0.1;
let salAlex = 0.2;
let tropAlex = 0.5;
let codVill = 0.25;
let salVill = 0.5;
let tropVill = 0.75;


// Add Event Listener to Calculate Button
fishBtn.addEventListener("click", fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // Catch fish based on character
  if (character === "steve") {
    // STEVE: Cod 70%, Salmon 20%, Tropical 5%, Puffer 5%
    catchFish(codSteve, salSteve, tropSteve);
  } else if (character === "alex") {
    // ALEX: Cod 10%, Salmon 10%, Tropical 30%, Puffer 50%
    catchFish(codAlex, salAlex, tropAlex);
  } else if (character === "villager") { 
    // VILLAGER: Cod 25%, Salmon 25%, Tropical 25%, Puffer 25%
    catchFish(codVill, salVill, tropVill);
  }
  
}

  function catchFish(fishOne, fishTwo, fishThree) {
    let randNum = Math.random();
    if (randNum < fishOne) {
      numCod++;
      numCodSpan.innerHTML = numCod;
      resultImg.src = "img/Raw-Cod.png";
    } else if (randNum < fishTwo) {
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      resultImg.src = "img/Raw-Salmon.png";
    } else if (randNum < fishThree) {
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      resultImg.src = "img/Tropical-Fish.png";
    } else {
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      resultImg.src = "img/Pufferfish.png";
    }
  }

