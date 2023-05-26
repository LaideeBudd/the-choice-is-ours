// This is the hamburger menu

const menuItems = document.getElementById("menu-items");
const menuToggle = () => {
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
};

// This is the hover action for the hero button

const heroButton = document.getElementById("hero-button");

heroButton.addEventListener(
  "mouseenter",
  function (event) {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "#ec1e24";
  },
  false
);
heroButton.addEventListener(
  "mouseleave",
  function (event) {
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
  },
  false
);

// This is the hover action for the donate button

const donateButton = document.getElementById("donate-button");

donateButton.addEventListener(
  "mouseenter",
  function (event) {
    event.target.style.color = "white";
    event.target.style.backgroundColor = "#ec1e24";
  },
  false
);
donateButton.addEventListener(
  "mouseleave",
  function (event) {
    event.target.style.color = "";
    event.target.style.backgroundColor = "";
  },
  false
);

// This is the hover action for the money buttons

const oneDollar = document.getElementById("one-dollar");
const fiveDollar = document.getElementById("five-dollar");
const tenDollar = document.getElementById("ten-dollar");
const twentyDollar = document.getElementById("twenty-dollar");
const fiftyDollar = document.getElementById("fifty-dollar");

// Can do EITHER hover or click not both.
// Choose to do the better UX decision

// oneDollar.addEventListener("mouseenter", function (event) {
//   event.target.style.backgroundColor = "#ec1e24";
// });

// oneDollar.addEventListener("mouseleave", function (event) {
//   event.target.style.backgroundColor = "";
// });

// fiveDollar.addEventListener("mouseenter", function (event) {
//   event.target.style.backgroundColor = "#ec1e24";
// });

// fiveDollar.addEventListener("mouseleave", function (event) {
//   event.target.style.backgroundColor = "";
// });

// tenDollar.addEventListener("mouseenter", function (event) {
//   event.target.style.backgroundColor = "#ec1e24";
// });

// tenDollar.addEventListener("mouseleave", function (event) {
//   event.target.style.backgroundColor = "";
// });

// twentyDollar.addEventListener("mouseenter", function (event) {
//   event.target.style.backgroundColor = "#ec1e24";
// });

// twentyDollar.addEventListener("mouseleave", function (event) {
//   event.target.style.backgroundColor = "";
// });

// fiftyDollar.addEventListener("onmouseover", function (event) {
//   event.target.style.backgroundColor = "#ec1e24";
// });

// fiftyDollar.addEventListener("mouseleave", function (event) {
//   event.target.style.backgroundColor = "";
// });

// This makes sets the active button color to red

const dollarButtonBackground = (activeButton) => {
  // set all buttons to the grey background color  \
  oneDollar.style.backgroundColor = "#000";
  fiveDollar.style.backgroundColor = "#000";
  tenDollar.style.backgroundColor = "#000";
  twentyDollar.style.backgroundColor = "#000";
  fiftyDollar.style.backgroundColor = "#000";

  // switch statement to change the active button

  switch (activeButton) {
    case "one":
      oneDollar.style.backgroundColor = "#ec1e24";
      break;

    case "five":
      fiveDollar.style.backgroundColor = "#ec1e24";
      break;

    case "ten":
      tenDollar.style.backgroundColor = "#ec1e24";
      break;

    case "twenty":
      twentyDollar.style.backgroundColor = "#ec1e24";
      break;

    case "fifty":
      fiftyDollar.style.backgroundColor = "#ec1e24";
      break;
  }
};
