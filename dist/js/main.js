// MENU

// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}

// PROJECT OVERLAY

// Select DOM Items
// Logos
const projectOverOne = document.querySelector('.project-overlay.project-1');
const projectOne = document.querySelector('.btn-project-1');
const projectButtonOne = document.querySelector('.close-project-1');

const projectOverTwo = document.querySelector('.project-overlay.project-2');
const projectTwo = document.querySelector('.btn-project-2');
const projectButtonTwo = document.querySelector('.close-project-2');

const projectOverThree = document.querySelector('.project-overlay.project-3');
const projectThree = document.querySelector('.btn-project-3');
const projectButtonThree = document.querySelector('.close-project-3');

const projectOverFour = document.querySelector('.project-overlay.project-4');
const projectFour = document.querySelector('.btn-project-4');
const projectButtonFour = document.querySelector('.close-project-4');

const projectOverFive = document.querySelector('.project-overlay.project-5');
const projectFive = document.querySelector('.btn-project-5');
const projectButtonFive = document.querySelector('.close-project-5');

const projectOverSix = document.querySelector('.project-overlay.project-6');
const projectSix = document.querySelector('.btn-project-6');
const projectButtonSix = document.querySelector('.close-project-6');

const projectOverSeven = document.querySelector('.project-overlay.project-7');
const projectSeven = document.querySelector('.btn-project-7');
const projectButtonSeven = document.querySelector('.close-project-7');

const projectOverEight = document.querySelector('.project-overlay.project-8');
const projectEight = document.querySelector('.btn-project-8');
const projectButtonEight = document.querySelector('.close-project-8');

const projectOverNine = document.querySelector('.project-overlay.project-9');
const projectNine = document.querySelector('.btn-project-9');
const projectButtonNine = document.querySelector('.close-project-9');

// Set Initial State Of Menu
let showProjectOne = false;
let showProjectTwo = false;
let showProjectThree = false;
let showProjectFour = false;
let showProjectFive = false;
let showProjectSix = false;
let showProjectSeven = false;
let showProjectEight = false;
let showProjectNine = false;

// Toggle

projectOne.addEventListener('click', toggleProjectOne);
projectButtonOne.addEventListener('click', toggleProjectOne);

projectTwo.addEventListener('click', toggleProjectTwo);
projectButtonTwo.addEventListener('click', toggleProjectTwo);

projectThree.addEventListener('click', toggleProjectThree);
projectButtonThree.addEventListener('click', toggleProjectThree);

projectFour.addEventListener('click', toggleProjectFour);
projectButtonFour.addEventListener('click', toggleProjectFour);

projectFive.addEventListener('click', toggleProjectFive);
projectButtonFive.addEventListener('click', toggleProjectFive);

projectSix.addEventListener('click', toggleProjectSix);
projectButtonSix.addEventListener('click', toggleProjectSix);

projectSeven.addEventListener('click', toggleProjectSeven);
projectButtonSeven.addEventListener('click', toggleProjectSeven);

projectEight.addEventListener('click', toggleProjectEight);
projectButtonEight.addEventListener('click', toggleProjectEight);

projectNine.addEventListener('click', toggleProjectNine);
projectButtonNine.addEventListener('click', toggleProjectNine);

// Project 1
function toggleProjectOne() {
  if (!showProjectOne) {
    projectOverOne.classList.add('showProjectOne');
    projectButtonOne.classList.add('showProjectOne');
    showProjectOne = true;
  } else {
    projectOverOne.classList.remove('showProjectOne');
    projectButtonOne.classList.remove('showProjectOne');
    showProjectOne = false;
  }
}
// Project 2
function toggleProjectTwo() {
  if (!showProjectTwo) {
    projectOverTwo.classList.add('showProjectTwo');
    projectButtonTwo.classList.add('showProjectTwo');
    showProjectTwo = true;
  } else {
    projectOverTwo.classList.remove('showProjectTwo');
    projectButtonTwo.classList.remove('showProjectTwo');
    showProjectTwo = false;
  }
}
// Project 3
function toggleProjectThree() {
  if (!showProjectThree) {
    projectOverThree.classList.add('showProjectThree');
    projectButtonThree.classList.add('showProjectThree');
    showProjectThree = true;
  } else {
    projectOverThree.classList.remove('showProjectThree');
    projectButtonThree.classList.remove('showProjectThree');
    showProjectThree = false;
  }
}
// Project 4
function toggleProjectFour() {
  if (!showProjectFour) {
    projectOverFour.classList.add('showProjectFour');
    projectButtonFour.classList.add('showProjectFour');
    showProjectFour = true;
  } else {
    projectOverFour.classList.remove('showProjectFour');
    projectButtonFour.classList.remove('showProjectFour');
    showProjectFour = false;
  }
}
// Project 5
function toggleProjectFive() {
  if (!showProjectFive) {
    projectOverFive.classList.add('showProjectFive');
    projectButtonFive.classList.add('showProjectFive');
    showProjectFive = true;
  } else {
    projectOverFive.classList.remove('showProjectFive');
    projectButtonFive.classList.remove('showProjectFive');
    showProjectFive = false;
  }
}
// Project 6
function toggleProjectSix() {
  if (!showProjectSix) {
    projectOverSix.classList.add('showProjectSix');
    projectButtonSix.classList.add('showProjectSix');
    showProjectSix = true;
  } else {
    projectOverSix.classList.remove('showProjectSix');
    projectButtonSix.classList.remove('showProjectSix');
    showProjectSix = false;
  }
}
// Project 7
function toggleProjectSeven() {
  if (!showProjectSeven) {
    projectOverSeven.classList.add('showProjectSeven');
    projectButtonSeven.classList.add('showProjectSeven');
    showProjectSeven = true;
  } else {
    projectOverSeven.classList.remove('showProjectSeven');
    projectButtonSeven.classList.remove('showProjectSeven');
    showProjectSeven = false;
  }
}
// Project 8
function toggleProjectEight() {
  if (!showProjectEight) {
    projectOverEight.classList.add('showProjectEight');
    projectButtonEight.classList.add('showProjectEight');
    showProjectEight = true;
  } else {
    projectOverEight.classList.remove('showProjectEight');
    projectButtonEight.classList.remove('showProjectEight');
    showProjectEight = false;
  }
}
// Project 9
function toggleProjectNine() {
  if (!showProjectNine) {
    projectOverNine.classList.add('showProjectNine');
    projectButtonNine.classList.add('showProjectNine');
    showProjectNine = true;
  } else {
    projectOverNine.classList.remove('showProjectNine');
    projectButtonNine.classList.remove('showProjectNine');
    showProjectNine = false;
  }
}
