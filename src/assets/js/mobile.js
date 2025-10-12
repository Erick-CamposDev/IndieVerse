const menuMobile = document.getElementById("menuMobile");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

const tabModalBtn = document.getElementById("tabMenuBtn");
const tabMenu = document.querySelector(".tab-menu-mobile");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});

tabModalBtn.addEventListener("click", () => {
  tabMenu.classList.toggle("active");
});
