const openModalBtn = document.getElementById("showMoreBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.querySelector(".modal-bg");

const tabBtns = document.querySelectorAll(".tabBtns");
const modalContents = document.querySelectorAll(".modal-content");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
  tabMenu.classList.remove("active");
}

tabBtns.forEach((button, i) => {
  button.addEventListener("click", () => {
    modalContents.forEach((content, ci) => {
      if (i === ci) {
        content.style.display = "flex";
      } else {
        content.style.display = "none";
      }
    });
  });
});

const games = [];
