// prettier-ignore
import * as handles from "../utils/handles.js"
import { gameBar, gameBarMobile } from "./constsAndLets.js";
import { steam, steamMobile } from "./constsAndLets.js";
import { errorMessage, errorMessageMobile } from "./constsAndLets.js";
import { loading, loadingMsg } from "./constsAndLets.js";
import {
  gameLogo,
  gameCharacter,
  gameType,
  gameDescription,
} from "./constsAndLets.js";
import { main } from "./constsAndLets.js";
import { verifyContent } from "./accordions.js";
import { modalChange } from "./modals.js";

export default async function showInfoBySearch() {
  const searchBar = gameBar || gameBarMobile;
  const searchValue = gameBar.value || gameBarMobile.value;

  const steamLinks = [steam, steamMobile];

  handles.resetToDefault(errorMessage);
  handles.resetToDefault(errorMessageMobile);

  if (searchValue === "" || !isNaN(searchValue)) {
    handles.showError("JOGO NÃO ENCONTRADO!");
    handles.showErrorMobile("JOGO NÃO ENCONTRADO!");
    return;
  }

  loading.style.display = "flex";

  try {
    const response = await fetch("src/assets/data/games.json");
    const data = await response.json();

    const gameFound = data.games.find((game) => game.name === searchValue);

    if (gameFound) {
      gameLogo.src = gameFound.logo.url;
      gameLogo.alt = gameFound.logo.alt;
      gameCharacter.src = gameFound.character.url;
      gameCharacter.alt = gameFound.character.alt;
      gameType.innerHTML = `<h2>${gameFound.type}</h2>`;
      gameDescription.innerHTML = `<p>${gameFound.description}</p>`;
      main.style.backgroundImage = `url(${gameFound.background})`;
      steamLinks.forEach((url) => {
        url.href = `${gameFound.url}`;
      });
      modalChange(gameFound);
      verifyContent(gameFound);
      searchBar.value = "";
      searchBar.focus();

      loadingMsg.textContent = "JOGO ENCONTRADO!";
      setTimeout(() => {
        loading.style.display = "none";
        loadingMsg.textContent = "CARREGANDO...";
      }, 1500);
    } else {
      handles.showError("JOGO NÃO ENCONTRADO!");
    }
  } catch (error) {
    alert("ERRO AO BUSCAR JOGO! TENTE NOVAMENTE MAIS TARDE!");
    console.log(error);
  }
}
