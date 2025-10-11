const openModalBtn = document.getElementById("showMoreBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.querySelector(".modal-bg");

function openModal() {
  modal.style.display = "flex";
}

function closeModal() {
  modal.style.display = "none";
}
