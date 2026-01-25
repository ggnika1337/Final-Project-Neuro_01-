// THEME CHANGER BUTTON ANIMATION

const themeBtn = document.querySelector(".theme-btn");
const themeBtnOverlay = document.querySelector(".theme-btn-overlay");
let isRight = false;

// HTML ELEMENTS FOR LIGHT THEME
let PageFirst = document.querySelector(".first-page");
let heading = document.querySelector(".heading");
let headingThird = document.querySelector(".heading-third");
let burgerMenu = document.getElementById("burgerMenu");
let overlay = document.getElementById("menu");
let burgerBar = document.getElementById("burgerBar");
let firstPage = document.querySelector("first-page");
let firstPageInfo = document.querySelector(".page-one-text");
let pageCounter = document.querySelector(".first-page-number");
let sectionHeader = document.querySelector(".section-header");
let section = document.querySelector(".middle-pages");
let lorem = document.getElementById("loremText");
let readMoreBtn = document.querySelector(".read-more-btn");
let aboutProject = document.querySelectorAll(".about-project");
let subject = document.querySelectorAll(".project-subject");
let pros = document.querySelectorAll(".project-pros");
let wholeProject = document.querySelectorAll(".project");
let triangle = document.querySelectorAll(".triangle");
let projectName = document.querySelectorAll(".project-name");
// HTML ELEMENTS FOR LIGHT THEME

let isDarkMode = true;
changeTheme();

function changeTheme() {
  if (localStorage.getItem("theme") === "true") {
    // LIGHT THEME
    burgerBar.style.background = "rgba(199, 197, 197, 0.9)";
    overlay.style.background = "rgba(199, 197, 197, 1)";
    PageFirst.style.background = "rgba(199, 197, 197, 0.5)";
    heading.style.color = "black";
    firstPageInfo.style.color = "black";
    pageCounter.style.color = "black";
    headingThird.style.color = "black";
    sectionHeader.style.color = "black";
    lorem.style.backgroundColor = "white";
    section.style.backgroundColor = "white";
    readMoreBtn.style.border = "1px solid black";
    readMoreBtn.style.color = "black";

    subject.forEach((el) => {
      el.style.color = "rgba(0, 0, 0, 0.8)";
    });
    aboutProject.forEach((el) => {
      el.style.color = "rgba(0, 0, 0, 0.8)";
    });
    pros.forEach((el) => {
      el.style.color = "rgba(0, 0, 0, 0.8)";
    });
    wholeProject.forEach((el) => {
      el.style.boxShadow = "8px 8px 15px #0000008a";
    });
    triangle.forEach((el) => {
      el.style.display = "none";
    });
    projectName.forEach((el) => {
      el.style.color = "black";
    });
  } else {
    // DARK THEME
    burgerBar.style.background = "rgba(65, 65, 65, 0.2)";
    overlay.style.background = "rgba(0, 0, 0, 1)";
    PageFirst.style.background = "rgba(199, 197, 197, 0)";
    headingThird.style.color = "white";
    firstPageInfo.style.color = "white";
    pageCounter.style.color = "white";
    headingThird.style.color = "white";
    sectionHeader.style.color = "transparent";
    section.style.backgroundColor = "black";
    lorem.style.backgroundColor = "black";
    lorem.style.webkitTextStroke = "none";
    readMoreBtn.style.border = "1px solid white";
    readMoreBtn.style.color = "white";
    subject.forEach((el) => {
      el.style.color = "rgba(255, 255, 255, 0.8)";
    });
    aboutProject.forEach((el) => {
      el.style.color = "rgba(255, 255, 255, 0.8)";
    });
    pros.forEach((el) => {
      el.style.color = "rgba(255, 255, 255, 0.8)";
    });
    wholeProject.forEach((el) => {
      el.style.boxShadow = "8px 8px 15px #00000080";
    });
    triangle.forEach((el) => {
      el.style.display = "block";
    });
    projectName.forEach((el) => {
      el.style.color = "none";
    });
  }
}

themeBtn.addEventListener("click", () => {
  if (themeBtn.style.justifyContent === "flex-end") {
    themeBtn.style.justifyContent = "flex-start";
    themeBtnOverlay.style.justifyContent = "flex-start";
  } else {
    themeBtn.style.justifyContent = "flex-end";
    themeBtnOverlay.style.justifyContent = "flex-end";
  }
  isRight = !isRight;
  isDarkMode = !isDarkMode;
  localStorage.setItem("theme", isDarkMode);
  changeTheme();
});

console.log(isDarkMode);

themeBtnOverlay.addEventListener("click", () => {
  if (themeBtnOverlay.style.justifyContent === "flex-end") {
    themeBtn.style.justifyContent = "flex-start";
    themeBtnOverlay.style.justifyContent = "flex-start";
  } else {
    themeBtnOverlay.style.justifyContent = "flex-end";
    themeBtn.style.justifyContent = "flex-end";
  }
  isRight = !isRight;

  isDarkMode = !isDarkMode;
  localStorage.setItem("theme", isDarkMode);
  changeTheme();
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

isOverlay = true;
burgerX.style.display = "none";
burgerMenu.addEventListener("click", function () {
  overlay.classList.toggle("overlay");
  let burgerX = document.getElementById("burgerX");
  let burger = document.getElementById("burger");

  isOverlay = !isOverlay;

  if (isOverlay === true) {
  } else {
    document.body.style.overflow = "hidden";
  }

  if (isOverlay === true) {
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

window.addEventListener("load", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// BULLETS FILL FUNCTION

let bulletOne = document.querySelector(".bullets-one");
let bulletTwo = document.querySelector(".bullets-two");
let bulletThree = document.querySelector(".bullets-three");
let bulletOneBottom = document.querySelector(".bullets-one-bottom");
let bulletTwoBottom = document.querySelector(".bullets-two-bottom");
let bulletThreeBottom = document.querySelector(".bullets-three-bottom");

bulletOne.style.backgroundColor = "rgba(229, 229, 72, 1)";
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

bulletOneBottom.style.backgroundColor = "rgba(229, 229, 72, 1)";
bulletOneBottom.addEventListener("click", () => {
  bulletOneBottom.style.backgroundColor = "rgba(229, 229, 72, 1)";
  bulletTwoBottom.style.backgroundColor = "transparent";
  bulletThreeBottom.style.backgroundColor = "transparent";
});
bulletTwoBottom.addEventListener("click", () => {
  bulletOneBottom.style.backgroundColor = "transparent";
  bulletTwoBottom.style.backgroundColor = "rgba(229, 229, 72, 1)";
  bulletThreeBottom.style.backgroundColor = "transparent";
});
bulletThreeBottom.addEventListener("click", () => {
  bulletOneBottom.style.backgroundColor = "transparent";
  bulletTwoBottom.style.backgroundColor = "transparent";
  bulletThreeBottom.style.backgroundColor = "rgba(229, 229, 72, 1)";
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

// READ MORE FUNC

lorem.style.display = "none";

readMoreBtn.addEventListener("click", () => {
  if (moreText === false) {
    lorem.style.display = "flex";
    readMoreBtn.textContent = "HIDE TEXT";
    moreText = true;
  } else if (moreText === true) {
    lorem.style.display = "none";
    readMoreBtn.textContent = "READ MORE";
    moreText = false;
  }
});

moreText = false;
