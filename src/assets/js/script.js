import sortGames from "./utils/sort.js";
import { searchBtn, searchBtnMobile } from "./services/constsAndLets.js";
import { gameBar, gameBarMobile } from "./services/constsAndLets.js";
import {
  closeModalBtn,
  closeVideoModalBtn,
  openModalBtn,
  openVideoModal,
} from "./services/constsAndLets.js";
import showInfoBySearch from "./services/searchGame.js";
import { searchByPressingEnter } from "./utils/seachbarKey.js";
import { handleClick } from "./services/modals.js";
import { openModal, closeModal, closeVideoModal } from "./services/modals.js";

const searchBtns = [searchBtn, searchBtnMobile];

function main() {
  sortGames();
  handleClick();
  searchByPressingEnter(gameBar);
  searchByPressingEnter(gameBarMobile);

  searchBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      showInfoBySearch();
    });
  });

  openModalBtn.onclick = () => openModal(0, 1);
  openVideoModal.onclick = () => openModal(1, 0);
  closeModalBtn.onclick = () => closeModal();
  closeVideoModalBtn.onclick = () => closeVideoModal();
}

main();
