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
  "Sources have told us they left over 24hrs ago and intended to learn more about the heart of the ocean";

// INITIAL LOCATION BASED ON PROMPT:

let correctLocation = "library";
let currentLocation;
let booleanLocation = false;

// Function for checking location match: Dont alter

let checkLocation = function () {
  correctLocation === currentLocation
    ? (booleanLocation = true)
    : (booleanLocation = false);
};

// SELECTION OF VILLAIN:
let villain = "Bruna";

// Issuing warrants: Dont alter

let warrantIssue;
let hasIssuedWarrant = false;

// Function: Villain and Warrant issue: Dont alter

let villainSelectedAndWarrantIssue = function (name) {
  hasIssuedWarrant = true;
  modalBox.classList.add("changeBackground");
  warrantIssue = name;
  warrantAlert.textContent = `Warrant Issued to ${name}… now FIND THEM`;
};

// Function endGame: Dont alter
// Add to Else block at the LAST correct location

let endGame = function () {
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

btnHotel.addEventListener("click", function () {
  currentLocation = "hotel";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent =
      "Sorry, we are totally booked for the next 5 days.";
  } else {
    textContent.textContent =
      "She left in her Corvette saying she wanted to figure out a mysterious smile...";
    correctLocation = "museum";
  }
});

// LIBRARY

btnLibrary.addEventListener("click", function () {
  currentLocation = "library";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent = "We have won the award of Best Library in 1978!";
  } else {
    textContent.textContent =
      "The lady seemed to be in a hurry. She mentioned having to catch a plane.";
    correctLocation = "airport";
  }
});

// BANK

btnBank.addEventListener("click", function () {
  currentLocation = "bank";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent =
      "Our safes are totally insured so you can sleep at peace.";
  } else {
    textContent.textContent =
      "Her Account was as impressive as her blonde hair, yet she took just enough to rent a hotel room";
    correctLocation = "hotel";
  }
});

// AIRPORT

btnAirport.addEventListener("click", function () {
  currentLocation = "airport";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent =
      "Our flights are currently delayed because of the weather. No tickets available.";
  } else {
    textContent.textContent =
      "She got her way in by bribing the luggage guy with her hat! She had no cash.";
    correctLocation = "bank";
  }
});

// MUSEUM

btnMuseum.addEventListener("click", function () {
  currentLocation = "museum";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent = "We are currently hosting Picasso's: Monalisa";
  } else {
    endGame();
  }
});

// The villain:
brunaBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Bruna");
});

// Wrong choices:
marthaBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Martha");
});
luisaBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Luisa");
});
dianeBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Diane");
});
viniciusBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Vinicius");
});
marcusBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Marcus");
});
tiagoBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Tiago");
});
renatoBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Renato");
});
