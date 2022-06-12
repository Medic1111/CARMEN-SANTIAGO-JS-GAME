// All Elements:

let btnHotel = document.getElementById("hotel");
let btnBank = document.getElementById("bank");
let btnAirport = document.getElementById("airport");
let btnMuseum = document.getElementById("museum");
let btnLibrary = document.getElementById("library");
let marthaBtn = document.getElementById("madalena");
let luisaBtn = document.getElementById("luisa");
let dianeBtn = document.getElementById("diane");
let brunaBtn = document.getElementById("bruna");
let viniciusBtn = document.getElementById("vinicius");
let marcusBtn = document.getElementById("marcus");
let tiagoBtn = document.getElementById("tiago");
let renatoBtn = document.getElementById("renato");
let warrantAlert = document.getElementById("warrantIssued");
let restartBtn = document.getElementById("restart-btn");
let nextBtn = document.getElementById("next-btn");
let modal = document.getElementById("modal");
let modalBox = document.getElementById("modalBox");

// Function: NEXT and RESTART: Dont alter

let ifNextOrRestart = () => {
  btnHotel.classList.add("hidden");
  btnAirport.classList.add("hidden");
  btnLibrary.classList.add("hidden");
  btnBank.classList.add("hidden");
  btnMuseum.classList.add("hidden");
  nextBtn.classList.toggle("hidden");
};

// MODAL TOGGLE: Dont Alter.

let warrantBtn = document.getElementById("warrant-btn");
warrantBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
});

let modalCloseBtn = document.getElementById("modal-close");
modalCloseBtn.addEventListener("click", () => {
  modal.classList.toggle("hidden");
  modalBox.classList.remove("changeBackground");
});

// INITIAL PROMPT:

let textContent = document.getElementById("text-content");
textContent.textContent =
  "You are doing good, Detective. Now, we have info in regards them attempting a runaway. Find Them!";

// INITIAL LOCATION BASED ON PROMPT:

let correctLocation = "airport";
let currentLocation;
let booleanLocation = false;

// Function for checking location match: Dont alter

let checkLocation = () => {
  correctLocation === currentLocation
    ? (booleanLocation = true)
    : (booleanLocation = false);
};

// SELECTION OF VILLAIN:
let villain = "Luisa";

// Issuing warrants: Dont alter

let warrantIssue;
let hasIssuedWarrant = false;

// Function: Villain and Warrant issue: Dont alter

let villainSelectedAndWarrantIssue = (name) => {
  hasIssuedWarrant = true;
  modalBox.classList.add("changeBackground");
  warrantIssue = name;
  warrantAlert.textContent = `Warrant Issued to ${name}… now FIND THEM`;
};

// Function endGame: Dont alter
// Add to Else block at the LAST correct location

let endGame = () => {
  if (villain === warrantIssue && hasIssuedWarrant) {
    warrantAlert.textContent = "You win!";
    textContent.textContent = `${villain} has been ARRESTED!`;
    warrantBtn.classList.add("hidden");
    ifNextOrRestart();
  } else if (villain !== warrantIssue && hasIssuedWarrant) {
    warrantAlert.textContent = `Bad Job Detective...`;
    textContent.textContent = `You arrested ${warrantIssue}.The villain was ${villain}`;
    warrantBtn.classList.add("hidden");
    restartBtn.classList.toggle("hidden");
    ifNextOrRestart();
    nextBtn.classList.add("hidden");
  } else {
    warrantAlert.textContent = `Bad Job Detective...`;
    textContent.textContent = `It's ${villain}!: DO YOU HAVE YOUR WARRANT?`;
    warrantBtn.classList.add("hidden");
    restartBtn.classList.toggle("hidden");
    ifNextOrRestart();
    nextBtn.classList.add("hidden");
  }
};

// SETTING CURRENT LOCATION AND CALLING checkLocation();
// Change correct location to desired next stop.

// HOTEL

btnHotel.addEventListener("click", () => {
  currentLocation = "hotel";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent =
      "Sorry, we are totally booked for the next 5 days.";
  } else {
    textContent.textContent =
      "She seemed a bit off. Still, bought tickets for the Art Basal. ";
    correctLocation = "museum";
  }
});

// LIBRARY

btnLibrary.addEventListener("click", () => {
  currentLocation = "library";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent = "We have won the award of Best Library in 1978!";
  } else {
    textContent.textContent =
      "Who uses a belt to try to reach a book? TOURISTS!";
    correctLocation = "hotel";
  }
});

// BANK

btnBank.addEventListener("click", () => {
  currentLocation = "bank";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent =
      "Our safes are totally insured so you can sleep at peace.";
  } else {
    textContent.textContent =
      "Yes, the blondie! Rushed out saying something about an Atlas.";
    correctLocation = "library";
  }
});

// AIRPORT

btnAirport.addEventListener("click", () => {
  currentLocation = "airport";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent =
      "Our flights are currently delayed because of the weather. No tickets available.";
  } else {
    textContent.textContent =
      "The person you are looking for landed this morning and rented a Limo. Mentioned a non working credit card.";
    correctLocation = "bank";
  }
});

// MUSEUM

btnMuseum.addEventListener("click", () => {
  currentLocation = "museum";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent = "We are currently hosting Picasso's: Monalisa";
  } else {
    endGame();
  }
});

// The Villain:

luisaBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Luisa");
});

// Wrong choices:
marthaBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Martha");
});
dianeBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Diane");
});
marcusBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Marcus");
});
tiagoBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Tiago");
});
