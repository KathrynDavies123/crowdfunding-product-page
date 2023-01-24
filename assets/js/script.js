let menubutton = document.querySelector(".menu-button");
let navlist = document.querySelector(".navigation");

let backgroundcolor = document.querySelector(".background-color");

let bookmarkbutton = document.querySelector(".bookmark-button");
let bookmarked = false;

let amountoutputdollar = document.querySelector("#amount-backed-dollar");
let totalbackeresoutput = document.querySelector("#total-backers");
let progressbar = document.querySelector(".progress-bar-completed");

let productcontainerbamboo = document.querySelector(".bamboo");
let productcontainerblack = document.querySelector(".black");
let productcontainermahogany = document.querySelector(".mahogany");

let numberremainingbamboooutput = document.querySelector(
  "#bamboo-number-remaining"
);
let numberremainingblackoutput = document.querySelector(
  "#black-number-remaining"
);
let numberremainingmahoganyoutput = document.querySelector(
  "#mahogany-number-remaining"
);

let bamboorewardbutton = document.querySelector(".bamboo-button");
let blackrewardbutton = document.querySelector(".black-button");
let mahoganyrewardbutton = document.querySelector(".mahogany-button");

let amountbackeddollar = 65000;
let totalbackers = 5007;
let amountbackedpercentage = ((amountbackeddollar / 100000) * 100).toFixed(2);

let numberremainingbamboo = 101;
let numberremainingblack = 64;
let numberremainingmahogany = 0;

outputStats = () => {
  amountoutputdollar.innerText = `$${amountbackeddollar.toLocaleString()}`;
  totalbackeresoutput.innerText = `${totalbackers.toLocaleString()}`;
  progressbar.style.width = `${amountbackedpercentage}%`;
  numberremainingbamboooutput.innerText = `${numberremainingbamboo}`;
  numberremainingblackoutput.innerText = `${numberremainingblack}`;
  numberremainingmahoganyoutput.innerText = `${numberremainingmahogany}`;
  if (numberremainingbamboo == 0) {
    productcontainerbamboo.classList.add("out-of-stock");
    bamboorewardbutton.innerText = "Out of Stock";
    bamboorewardbutton.disabled = true;
  }
  if (numberremainingblack == 0) {
    productcontainerblack.classList.add("out-of-stock");
    blackrewardbutton.innerText = "Out of Stock";
    blackrewardbutton.disabled = true;
  }
  if (numberremainingmahogany == 0) {
    productcontainermahogany.classList.add("out-of-stock");
    mahoganyrewardbutton.innerText = "Out of Stock";
    mahoganyrewardbutton.disabled = true;
  }
};

outputStats();

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
