import { modal, modals, modalContents } from "./constsAndLets.js";
import { platformList } from "./constsAndLets.js";
import { gameTitle, gameTypeModal, gameContent } from "./constsAndLets.js";
import { creator } from "./constsAndLets.js";
import { dataLaunch } from "./constsAndLets.js";
import {
  gameplayContent,
  gameplayList,
  upperAward,
  awardList,
  legacy,
  curiosities,
} from "./constsAndLets.js";
import { videoContainer } from "./constsAndLets.js";
import { tabBtns } from "./constsAndLets.js";
import { gameBarMobile } from "./constsAndLets.js";
import { tabMenu } from "../mobile.js";
import showInfoBySearch from "./searchGame.js";

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

export function handleClick() {
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
}
