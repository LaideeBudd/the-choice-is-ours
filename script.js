const menuItems = document.getElementById("menu-items");
const menuToggle = () => {
  if (menuItems.style.display === "none") {
    menuItems.style.display = "flex";
  } else {
    menuItems.style.display = "none";
  }
};
