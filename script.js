// Opening page:

let h1El = document.getElementById("h1-style");
let userInput = document.getElementById("userName");
let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let p3 = document.getElementById("p3");
let goBtn = document.getElementById("go");
let confirmBtn = document.getElementById("confirm");

let toggleHidden = () => {
  p2.classList.add("hidden");
  userInput.classList.add("hidden");
  p3.classList.add("hidden");
  confirmBtn.classList.add("hidden");
  goBtn.classList.toggle("hidden");
};

let intro = {
  hidePara: () => {
    let userName = userInput.value;
    p1.textContent = `Welcome ${userName}! Your mission is 
    about to start. Gather clues and issue a warrant to the 
    proper person.
    You MUST have a warrant issued before finding the villain.
    A checkbox list is available to you so you can keep track of clues.
    It does not matter whether you use the list or not.
    Good luck!`;
    toggleHidden();
  },
  functionConfirm: () => intro.hidePara(),
};

confirmBtn.addEventListener("click", () => {
  intro.functionConfirm();
});

// Second Page:
