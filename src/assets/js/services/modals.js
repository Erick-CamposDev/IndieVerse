import { modal, modals, modalContents } from "./constsAndLets";
import { platformList } from "./constsAndLets";
import { gameTitle, gameTypeModal, gameContent } from "./constsAndLets";
import { creator } from "./constsAndLets";
import { dataLaunch } from "./constsAndLets";
import {
  gameplayContent,
  gameplayList,
  upperAward,
  awardList,
  legacy,
  curiosities,
} from "./constsAndLets";
import { videoContainer } from "./constsAndLets";
import { tabBtns } from "./constsAndLets";
import { gameBarMobile } from "./constsAndLets";

export function modalChange(game) {
  //CONTÉUDO 1
  const platforms = game.platforms
    .map(
      (platform) =>
        `<img class="platform-logos" src="${platform.url}" alt="${platform.alt}"/>`,
    )
    .join("");
  platformList.innerHTML = `<h3>Plataformas</h3>
                            ${platforms}`;
  gameTitle.innerHTML = `<h2>${game.name}</h2>`;
  creator.src = `${game.creatorLogo.url}`;
  creator.alt = `${game.creatorLogo.alt}`;
  dataLaunch.innerText = `${game.data}`;
  gameTypeModal.innerText = `${game.type}`;
  gameContent.innerHTML = `<h3>História:</h3>
                           <p>${game.history}</p>`;

  //CONTEÚDO 2
  gameplayContent.innerHTML = `<h3>Jogabilidade:</h3>
                               <p>${game.gameplayDesc}</p>`;

  const gameplayMap = game.gameplayElements
    .map((element) => `<li>${element}</li>`)
    .join("");
  gameplayList.innerHTML = `<h3>⚔️ Principais elementos da jogabilidade:</h3>
                            <ul>${gameplayMap}</ul>`;

  //CONTEUDO 3
  upperAward.innerHTML = `<h3>🏆 Prêmios e reconhecimentos</h3>
                          <p>${game.awardsDesc}</p>`;

  const gameAwards = game.awards.map((award) => `<li>${award}</li>`).join("");
  awardList.innerHTML = `<h3>🥇 Principais reconhecimentos:</h3>
                        <ul>${gameAwards}</ul>`;

  legacy.innerHTML = `<h3>⭐ Legado:</h3>
                      <p>${game.legacy}</p>`;

  //CONTEUDO 4
  const gameCuriosities = game.curiositiesTitle
    .map(
      (title, index) =>
        `<li><span>${title}</span>${game.curiosities[index]}</li>`,
    )
    .join("");
  curiosities.innerHTML = `<h3>💡 Curiosidades</h3>
                          <ul>${gameCuriosities}</ul>`;

  //MODAL DO VIDEO TRAILER
  videoContainer.innerHTML = `${game.trailer}`;
}

gameBarMobile.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showInfoBySearch();
  } else {
    return;
  }
});

export function openModal(index, index2) {
  modal.style.display = "flex";
  modals[index].style.display = "flex";
  modals[index2].style.display = "none";
}

export function closeModal() {
  modal.style.display = "none";
  tabMenu.classList.remove("active");
}

export function closeVideoModal() {
  modal.style.display = "none";
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
