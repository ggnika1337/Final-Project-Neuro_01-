// THEME CHANGER BUTTON ANIMATION

const themeBtn = document.querySelector(".theme-btn");
const themeBtnOverlay = document.querySelector(".theme-btn-overlay");
let isRight = false;

themeBtn.addEventListener("click", () => {
  if (themeBtn.style.justifyContent === "flex-end") {
    themeBtn.style.justifyContent = "flex-start";
    themeBtnOverlay.style.justifyContent = "flex-start";
  } else {
    themeBtn.style.justifyContent = "flex-end";
    themeBtnOverlay.style.justifyContent = "flex-end";
  }
  isRight = !isRight;
});

themeBtnOverlay.addEventListener("click", () => {
  if (themeBtnOverlay.style.justifyContent === "flex-end") {
    themeBtn.style.justifyContent = "flex-start";
    themeBtnOverlay.style.justifyContent = "flex-start";
  } else {
    themeBtnOverlay.style.justifyContent = "flex-end";
    themeBtn.style.justifyContent = "flex-end";
  }
  isRight = !isRight;
});

// CURRENT TIME LOGIC

let time = document.getElementById("time");
let timeOverlay = document.getElementById("timeOverlay");

const currentDate = new Date();

const weekday = currentDate.toLocaleString("en-US", { weekday: "short" });
const day = currentDate.getDate();
const month = currentDate.toLocaleString("en-US", { month: `numeric` });

time.innerHTML = `${weekday.toUpperCase()} ${day}.${month}`;
timeOverlay.innerHTML = `${weekday.toUpperCase()} ${day}.${month}`;

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

// GET VIDEO LENGTH LOGIC

let videoLength = document.getElementById("videoLength");
let video = document.querySelector(".videoFirst");

video.addEventListener("loadedmetadata", () => {
  let mins = Math.floor(video.duration / 60);
  let secs = Math.floor(video.duration % 60);
  videoLength.innerHTML = `${mins}:${secs.toString().padStart(2, "0")}`;
});

// VIDEO PLAY / PAUSE LOGIC

let playBtn = document.querySelector(".video-btn");

playBtn.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    playBtn.style.opacity = 0.2;
  } else {
    video.pause();
    playBtn.style.opacity = 1;
  }
});

// SCROLL TO BOTTOM FUNC

let toEnd = document.getElementById("toBottom");

toEnd.addEventListener("click", () => {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth",
  });
});
