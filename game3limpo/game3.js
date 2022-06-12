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
  "Our intelligence team seems to believe they were heading towards a building with a pool! They packed bathing suits.";

// INITIAL LOCATION BASED ON PROMPT:

let correctLocation = "hotel";
let currentLocation;
let booleanLocation = false;

// Function for checking location match: Dont alter

let checkLocation = () => {
  correctLocation === currentLocation
    ? (booleanLocation = true)
    : (booleanLocation = false);
};

// SELECTION OF VILLAIN:
let villain = "Renato";

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
      "The person you are looking was late for an expo.They dropped their hat on the way out. ";
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
      "He came by and left rather quickly saying he had to catch a plane. What pretty blonde hair.";
    correctLocation = "airport";
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
      "The gentleman tried to get a loan, but he is maxed since he bought his convertible. He mentioned having to learn about finances.";
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
    endGame();
  }
});

// MUSEUM

btnMuseum.addEventListener("click", () => {
  currentLocation = "museum";
  checkLocation();
  if (!booleanLocation) {
    textContent.textContent = "We are currently hosting Picasso's: Monalisa";
  } else {
    textContent.textContent =
      "He was interrested in Monet, but said he had to run and get cash.";
    correctLocation = "bank";
  }
});

// The Villain:

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
marcusBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Marcus");
});
tiagoBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Tiago");
});
renatoBtn.addEventListener("click", () => {
  villainSelectedAndWarrantIssue("Renato");
});
