const menuMobile = document.getElementById("menuMobile");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  menuMobile.classList.remove("active");
});
