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
const projectOver = document.querySelector('.project-overlay.project-logos');
const project = document.querySelector('.btn-logos');
const projectButton = document.querySelector('.close-logos');

const projectOverOne = document.querySelector('.project-overlay.project-1');
const projectOne = document.querySelector('.btn-project-1');
const projectButtonOne = document.querySelector('.close-project-1');

const projectOverTwo = document.querySelector('.project-overlay.project-2');
const projectTwo = document.querySelector('.btn-project-2');
const projectButtonTwo = document.querySelector('.close-project-2');

const projectOverThree = document.querySelector('.project-overlay.project-3');
const projectThree = document.querySelector('.btn-project-3');
const projectButtonThree = document.querySelector('.close-project-3');

// Set Initial State Of Menu
let showProject = false;
let showProjectOne = false;
let showProjectTwo = false;
let showProjectThree = false;

// Toggle
project.addEventListener('click', toggleProject);
projectButton.addEventListener('click', toggleProject);

projectOne.addEventListener('click', toggleProjectOne);
projectButtonOne.addEventListener('click', toggleProjectOne);

projectTwo.addEventListener('click', toggleProjectTwo);
projectButtonTwo.addEventListener('click', toggleProjectTwo);

projectThree.addEventListener('click', toggleProjectThree);
projectButtonThree.addEventListener('click', toggleProjectThree);

// Logos
function toggleProject() {
  if (!showProject) {
    projectOver.classList.add('showProject');
    projectButton.classList.add('showProject');
    showProject = true;
  } else {
    projectOver.classList.remove('showProject');
    projectButton.classList.remove('showProject');
    showProject = false;
  }
}
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
