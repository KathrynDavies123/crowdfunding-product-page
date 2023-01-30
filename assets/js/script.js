// Declarations

let menubutton = document.querySelector(".menu-button");
let navlist = document.querySelector(".navigation");

let backgroundcolor = document.querySelector(".background-color");

let bookmarkbutton = document.querySelector(".bookmark-button");
let bookmarked = false;

let amountoutputdollar = document.querySelector("#amount-backed-dollar");
let totalbackeresoutput = document.querySelector("#total-backers");
let progressbar = document.querySelector(".progress-bar-completed");

let numberremainingbamboooutput = document.querySelectorAll(
  ".bamboo-number-remaining"
);
let numberremainingblackoutput = document.querySelectorAll(
  ".black-number-remaining"
);
let numberremainingmahoganyoutput = document.querySelectorAll(
  ".mahogany-number-remaining"
);

let rewardbuttons = document.querySelectorAll(".open-modal");

let modal = document.querySelector(".modal");

let defaultmodal = document.querySelector(".modal-default");
let thankyoumessage = document.querySelector(".thank-you-message");

let closemodalbuttons = document.querySelectorAll(".close-modal");

let radiobuttons = document.querySelectorAll("input[type='radio']");

let continuebuttons = document.querySelectorAll(".continue-button");

// Default numbers

let amountbackeddollar = 65000;
let totalbackers = 5007;

let numberremainingbamboo = 101;
let numberremainingblack = 64;
let numberremainingmahogany = 0;

// Function to output current backed amount, number of backers and number of rewards remaining

outputStats = () => {
  amountoutputdollar.innerText = `$${amountbackeddollar.toLocaleString()}`;
  totalbackeresoutput.innerText = `${totalbackers.toLocaleString()}`;
  let amountbackedpercentage = ((amountbackeddollar / 100000) * 100).toFixed(2);
  progressbar.style.width = `${amountbackedpercentage}%`;

  numberremainingbamboooutput.forEach((item) => {
    item.innerText = `${numberremainingbamboo}`;
    if (numberremainingbamboo == 0) {
      item.parentElement.parentElement.classList.add("out-of-stock");
      numberremainingbamboooutput[1].parentElement.parentElement.childNodes[9].innerText =
        "Out of Stock";
      numberremainingbamboooutput[1].parentElement.parentElement.childNodes[9].disabled = true;
      numberremainingbamboooutput[0].parentElement.parentElement.childNodes[1].disabled = true;
    }
  });

  numberremainingblackoutput.forEach((item) => {
    item.innerText = `${numberremainingblack}`;
    if (numberremainingblack == 0) {
      item.parentElement.parentElement.classList.add("out-of-stock");
      numberremainingblackoutput[1].parentElement.parentElement.childNodes[9].innerText =
        "Out of Stock";
      numberremainingblackoutput[1].parentElement.parentElement.childNodes[9].disabled = true;
      numberremainingblackoutput[0].parentElement.parentElement.childNodes[1].disabled = true;
    }
  });

  numberremainingmahoganyoutput.forEach((item) => {
    item.innerText = `${numberremainingmahogany}`;
    if (numberremainingmahogany == 0) {
      item.parentElement.parentElement.classList.add("out-of-stock");
      numberremainingmahoganyoutput[1].parentElement.parentElement.childNodes[9].innerText =
        "Out of Stock";
      numberremainingmahoganyoutput[1].parentElement.parentElement.childNodes[9].disabled = true;
      numberremainingmahoganyoutput[0].parentElement.parentElement.childNodes[1].disabled = true;
    }
  });
};

outputStats();

// Event listener function to check the radio of the corresponding reward button pressed on the main page in the modal when it opens

rewardbuttons.forEach((item) => {
  item.addEventListener("click", function () {
    let buttonvalue = item.value;
    modal.style.display = "flex";
    backgroundcolor.classList.add("background-overlay");
    for (let i = 0; i < radiobuttons.length; i++) {
      if (buttonvalue == radiobuttons[i].value) {
        radiobuttons[i].checked = true;
        radiobuttons[i].parentElement.classList.add("product-selected");
        radiobuttons[i].parentElement.childNodes[9].style.display = "flex";
      }
    }
  });
});

// Function to add style and extra pledge input box when radio is checked

for (let i = 0; i < radiobuttons.length; i++) {
  radiobuttons[i].addEventListener("click", function () {
    this.parentElement.classList.add("product-selected");
    this.parentElement.childNodes[9].style.display = "flex";

    for (let j = 0; j < radiobuttons.length; j++) {
      if (j !== i) {
        radiobuttons[j].parentElement.classList.remove("product-selected");
        radiobuttons[j].parentElement.childNodes[9].style.display = "none";
      }
    }
  });
}

// Function to calculate the new amount pledged, number of backers and number of rewards remaining when an amount is pledged. Also opens the "thank you" message and updates the stats on the main page as long as the conditions for the corresponding rewards are met

continuebuttons.forEach((item) => {
  item.addEventListener("click", function () {
    if (item.value == "bamboo" && item.previousElementSibling.value >= 25) {
      numberremainingbamboo -= 1;
    }
    if (item.value == "black" && item.previousElementSibling.value >= 75) {
      numberremainingblack -= 1;
    }
    if (item.value == "mahogany" && item.previousElementSibling.value >= 200) {
      numberremainingmahogany -= 1;
    }
    if (
      (item.value == "bamboo" && item.previousElementSibling.value >= 25) ||
      (item.value == "black" && item.previousElementSibling.value >= 75) ||
      (item.value == "mahogany" && item.previousElementSibling.value >= 200) ||
      (item.value == "noreward" && item.previousElementSibling.value > 0)
    ) {
      totalbackers += 1;
      amountbackeddollar += Number(item.previousElementSibling.value);
      outputStats();
      thankyoumessage.style.display = "flex";
      defaultmodal.style.display = "none";
    }
  });
});

// Close modal, menu and bookmark buttons

closemodalbuttons.forEach((item) => {
  item.addEventListener("click", function () {
    thankyoumessage.style.display = "none";
    defaultmodal.style.display = "flex";
    modal.style.display = "none";
    backgroundcolor.classList.remove("background-overlay");
    for (let i = 0; i < radiobuttons.length; i++) {
      radiobuttons[i].checked = false;
      radiobuttons[i].parentElement.classList.remove("product-selected");
      radiobuttons[i].parentElement.childNodes[9].style.display = "none";
    }
  });
});

menubutton.addEventListener("click", function () {
  backgroundcolor.classList.toggle("background-gradient");
  navlist.classList.toggle("nav-open");
  menubutton.classList.toggle("close-menu");
});

bookmarkbutton.addEventListener("click", function () {
  if (bookmarked == false) {
    bookmarkbutton.innerHTML =
      '<img src="./assets/images/Group 4.svg" alt="bookmark icon">';
    bookmarked = true;
  } else {
    bookmarkbutton.innerHTML =
      '<img src="./assets/images/icon-bookmark.svg" alt="bookmark icon">';
    bookmarked = false;
  }
});
