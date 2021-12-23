// Mega menu staff
const openBtn = document.getElementById("mega-menu-open-btn");
const openLogo = document.getElementById("mega-menu-open-logo");
const closeBtn = document.querySelector('.left-side');
const closeBtn2 = document.querySelector(".close-btn");
const megaMenu = document.querySelector(".mega-menu");
const main = document.querySelector('.main');

// Open Close mega menu
openBtn.addEventListener("click", () => {
  openMegaMenu()
});

openLogo.addEventListener('click', () => {
  openMegaMenu()
})

closeBtn.addEventListener("click", () => {
  closeMegaMenu()
});

closeBtn2.addEventListener("click", () => {
  closeMegaMenu()
});

main.addEventListener('click', () => {
  megaMenu.classList.remove('active');
  document.body.style.overflow = "visible";
})

function openMegaMenu() {
  megaMenu.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeMegaMenu() {
  megaMenu.classList.remove("active");
  document.body.style.overflow = "visible";
}


// scroll navbar
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    header.style.background = '#111';
  } else {
    header.style.background = 'transparent'
  }
})

// go up button
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  window.pageYOffset = 0;
})

