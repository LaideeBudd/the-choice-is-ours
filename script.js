const menuItems = document.getElementById("menu-items");
const menuToggle = () => {
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
};

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
