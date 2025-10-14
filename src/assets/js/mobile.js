const menuMobile = document.getElementById("menuMobile");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

const tabModalBtn = document.getElementById("tabMenuBtn");
const tabMenu = document.querySelector(".tab-menu-mobile");

const btnsMobile = document.querySelectorAll(".mobileTabBtn");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("active");
  errorMessageMobile.innerHTML = "";
});

closeBtn.addEventListener("click", () => {
  menuMobile.classList.remove("active");
  errorMessageMobile.innerHTML = "";
});

tabModalBtn.addEventListener("click", () => {
  tabMenu.classList.toggle("active");
});

btnsMobile.forEach((btnsMobile, i) => {
  btnsMobile.addEventListener("click", () => {
    modalContents.forEach((content, ci) => {
      if (i === ci) {
        content.style.display = "flex";
      } else {
        content.style.display = "none";
      }
    });
  });
});
