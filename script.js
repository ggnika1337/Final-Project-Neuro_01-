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
