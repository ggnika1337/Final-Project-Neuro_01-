// THEME CHANGER BUTTON ANIMATION

const themeBtn = document.querySelector(".theme-btn");
const themeDot = document.querySelector(".theme-dot");
let isRight = false;

themeBtn.addEventListener("click", () => {
  if (themeBtn.style.justifyContent === "flex-end") {
    themeBtn.style.justifyContent = "flex-start";
  } else {
    themeBtn.style.justifyContent = "flex-end";
  }
  isRight = !isRight;
});

console.log(isRight);

// HAMBURGER

var burgerMenu = document.getElementById("burger-menu");
var overlay = document.getElementById("menu");

burgerX.style.display = "none";

burgerMenu.addEventListener("click", function () {
  overlay.classList.toggle("overlay");
  let burgerX = document.getElementById("burgerX");
  let burger = document.getElementById("burger");
  let burgerTab = document.getElementsByClassName("burger");

  // ICON TOGGLE
  if (burgerX.style.display === "block") {
    burgerX.style.display = "none";
    burger.style.display = "block";
    burgerTab.style.position = "fixed";
  } else {
    burgerX.style.display = "block";
    burger.style.display = "none";
  }
});
