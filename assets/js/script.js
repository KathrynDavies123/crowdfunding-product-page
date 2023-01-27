let menubutton = document.querySelector(".menu-button");
let navlist = document.querySelector(".navigation");

let backgroundcolor = document.querySelector(".background-color");

let bookmarkbutton = document.querySelector(".bookmark-button");
let bookmarked = false;

let amountoutputdollar = document.querySelector("#amount-backed-dollar");
let totalbackeresoutput = document.querySelector("#total-backers");
let progressbar = document.querySelector(".progress-bar-completed");

let productcontainerbamboo = document.querySelectorAll(".bamboo");
let productcontainerblack = document.querySelectorAll(".black");
let productcontainermahogany = document.querySelectorAll(".mahogany");

let numberremainingbamboooutput = document.querySelectorAll(
  ".bamboo-number-remaining"
);
let numberremainingblackoutput = document.querySelectorAll(
  ".black-number-remaining"
);
let numberremainingmahoganyoutput = document.querySelectorAll(
  ".mahogany-number-remaining"
);

let openmodalbutton = document.querySelectorAll(".open-modal-button");
let closemodalbutton = document.querySelector(".close-modal-button");
let bamboorewardbutton = document.querySelector(".bamboo-button");
let blackrewardbutton = document.querySelector(".black-button");
let mahoganyrewardbutton = document.querySelector(".mahogany-button");

let modal = document.querySelector(".modal");

let radiobuttons = document.querySelectorAll("input[type='radio']");
let bambooradio = document.querySelector("#bamboo-radio");
let blackradio = document.querySelector("#black-radio");
let mahoganyradio = document.querySelector("#mahogany-radio");

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
      productcontainerbamboo.forEach((item) => {
        item.classList.add("out-of-stock");
      })

      bamboorewardbutton.innerText = "Out of Stock";
      bamboorewardbutton.disabled = true;
      bambooradio.disabled = true;
    }
  })

  numberremainingblackoutput.forEach((item) => {
    item.innerText = `${numberremainingblack}`;
    if (numberremainingblack == 0) {
      productcontainerblack.forEach((item) => {
        item.classList.add("out-of-stock");
      })
      blackrewardbutton.innerText = "Out of Stock";
      blackrewardbutton.disabled = true;
      blackradio.disabled = true;
    }
  })

  numberremainingmahoganyoutput.forEach((item) => {
    item.innerText = `${numberremainingmahogany}`;
    if (numberremainingmahogany == 0) {
      productcontainermahogany.forEach((item) => {
        item.classList.add("out-of-stock");
      })
      mahoganyrewardbutton.innerText = "Out of Stock";
      mahoganyrewardbutton.disabled = true;
      mahoganyradio.disabled = true;
    }
  })
};

outputStats();

openmodalbutton.forEach((item) => {
  item.addEventListener("click", function () {
    modal.style.display = "flex";
    backgroundcolor.classList.add("background-overlay");
  })
})

bamboorewardbutton.addEventListener("click", function () {
  bambooradio.checked = true;
})

blackrewardbutton.addEventListener("click", function () {
  blackradio.checked = true;
})

mahoganyrewardbutton.addEventListener("click", function () {
  mahoganyradio.checked = true;
})

closemodalbutton.addEventListener("click", function () {
  modal.style.display = "none";
  backgroundcolor.classList.remove("background-overlay");
  for (let i=0; i<radiobuttons.length; i++) {
    radiobuttons[i].checked = false;
    radiobuttons[i].parentElement.classList.remove("product-selected");
  }
})

for (let i=0; i<radiobuttons.length; i++) {
  radiobuttons[i].addEventListener("click", function () {
    this.parentElement.classList.add("product-selected");
    this.parentElement.childNodes[9].style.display = "flex";
    for (let j=0; j<radiobuttons.length; j++) {
      if (j !== i) {
        radiobuttons[j].parentElement.classList.remove("product-selected");
        radiobuttons[j].parentElement.childNodes[9].style.display = "none";
      }
    }
  })
}

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
