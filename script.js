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

let burgerMenu = document.getElementById("burgerMenu");
let overlay = document.getElementById("menu");
burgerX.style.display = "none";

isOverlay = true;
burgerMenu.addEventListener("click", function () {
  overlay.classList.toggle("overlay");
  let burgerX = document.getElementById("burgerX");
  let burger = document.getElementById("burger");
  let burgerBar = document.getElementById("burgerBar");
  let firstPage = document.querySelector("first-page");

  isOverlay = !isOverlay;

  if (isOverlay === true) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }

  if (burgerX.style.display === "block") {
    burgerX.style.display = "none";
    burger.style.display = "block";
  } else {
    burgerX.style.display = "block";
    burger.style.display = "none";
  }
});

// HAMBURGER MOBILE

let burgerMobileButtons = document.querySelectorAll(".burger-btn-mobile");
let burgerImgMobile = document.querySelector(".burgerImgMobile");
let burgerImgMobileX = document.querySelector(".burgerImgMobileX");

burgerMobileButtons.forEach((button) => {
  button.addEventListener("click", function () {
    overlay.classList.toggle("overlay");
  });

  if (burgerBar.style.position === "fixed") {
    burgerBar.style.position = "relative";
    document.body.style.overflow = "auto";
  } else {
    burgerBar.style.position = "fixed";
    document.body.style.overflow = "hidden";
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

// ARROW SCROLL FUNC

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    document.body.style.overflow = "hidden";
  }
});
let toEnd = document.getElementById("toBottom");
let scrollTo = document.querySelector(".section-header");

toEnd.addEventListener("click", () => {
  window.scrollTo({
    top: scrollTo.offsetTop,
    behavior: "smooth",
  });
  document.body.style.overflowY = "scroll";
});

// BULLETS FILL FUNCTION

let bulletOne = document.querySelector(".bullets-one");
let bulletTwo = document.querySelector(".bullets-two");
let bulletThree = document.querySelector(".bullets-three");

bulletOne.addEventListener("click", () => {
  bulletOne.style.backgroundColor = "rgba(229, 229, 72, 1)";
  bulletTwo.style.backgroundColor = "transparent";
  bulletThree.style.backgroundColor = "transparent";
});
bulletThree.addEventListener("click", () => {
  bulletOne.style.backgroundColor = "transparent";
  bulletTwo.style.backgroundColor = "rgba(229, 229, 72, 1)";
  bulletThree.style.backgroundColor = "transparent";
});
bulletThree.addEventListener("click", () => {
  bulletOne.style.backgroundColor = "transparent";
  bulletTwo.style.backgroundColor = "transparent";
  bulletThree.style.backgroundColor = "rgba(229, 229, 72, 1)";
});

// MORE WORKS FUNC

let moreWorks = document.getElementById("moreWorks");
let worksBtn = document.getElementById("moreWorksBtn");
let isShown = false;

worksBtn.addEventListener("click", () => {
  if (isShown) {
    moreWorks.style.display = "none";
    worksBtn.textContent = "MORE WORKS";
    isShown = false;
  } else {
    moreWorks.style.display = "flex";
    worksBtn.textContent = "SHOW LESS";
    isShown = true;
  }
});
