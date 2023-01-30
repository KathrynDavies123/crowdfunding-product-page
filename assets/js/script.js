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

let closemodalbutton = document.querySelector(".close-modal-button");

let rewardbuttons = document.querySelectorAll(".open-modal");

let modal = document.querySelector(".modal");

let radiobuttons = document.querySelectorAll("input[type='radio']");

let continuebuttons = document.querySelectorAll(".continue-button");

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
    totalbackers += 1;
    amountbackeddollar += Number(item.previousElementSibling.value);
    outputStats();
  })
})

closemodalbutton.addEventListener("click", function () {
  modal.style.display = "none";
  backgroundcolor.classList.remove("background-overlay");
  for (let i = 0; i < radiobuttons.length; i++) {
    radiobuttons[i].checked = false;
    radiobuttons[i].parentElement.classList.remove("product-selected");
    radiobuttons[i].parentElement.childNodes[9].style.display = "none";
  }
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
