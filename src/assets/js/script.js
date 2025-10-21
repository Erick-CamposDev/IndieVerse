const openModalBtn = document.getElementById("showMoreBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.querySelector(".modal-bg");

const modals = document.querySelectorAll(".modal");

const openVideoModal = document.getElementById("seeVideoBtn");
const closeVideoModalBtn = document.getElementById("closeVideoModalBtn");

const tabBtns = document.querySelectorAll(".tabBtns");
const modalContents = document.querySelectorAll(".modal-content");

const gameBar = document.getElementById("gameBar");
const gameBarMobile = document.getElementById("gameBarMobile");
const searchBtn = document.querySelector(".search-btn");
const searchBtnMobile = document.querySelector(".search-btn-mobile");

const errorMessage = document.querySelector(".message");
const errorMessageMobile = document.querySelector(".message-mobile");

const gameLogo = document.getElementById("gameLogo");
const gameCharacter = document.getElementById("gameCharacter");
const gameType = document.querySelector(".game-type");
const gameDescription = document.querySelector(".game-description");
const main = document.querySelector(".main-container");

const steam = document.querySelector(".steam-link");
const steamMobile = document.querySelector(".steam-mobile-link");

//MODAL
const gameTitle = document.getElementById("gameTitle");
const creator = document.querySelector(".creator-logo");
const dataLaunch = document.getElementById("dataLaunch");
const gameTypeModal = document.getElementById("gameType");
const platformList = document.getElementById("platform-list");
const gameContent = document.querySelector(".game-content");
const gameplayContent = document.querySelector(".gameplay-content");
const gameplayList = document.querySelector(".gameplay-list");
const upperAward = document.querySelector(".upper-award-content");
const awardList = document.querySelector(".award-list");
const legacy = document.querySelector(".game-legacy");
const curiosities = document.querySelector(".curiosities");

function openModal(index, index2) {
  modal.style.display = "flex";
  modals[index].style.display = "flex";
  modals[index2].style.display = "none";
}

function closeModal() {
  modal.style.display = "none";
  tabMenu.classList.remove("active");
}

function closeVideoModal() {
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

const games = [
  hollowKnight,
  undertale,
  deltarune,
  silksong,
  celeste,
  cuphead,
  shovelKnight,
];

function showInfoBySearch() {
  const searchBar = gameBar || gameBarMobile;
  const searchValue = gameBar.value || gameBarMobile.value;

  resetToDefault(errorMessage);
  resetToDefault(errorMessageMobile);

  if (searchValue === "" || !isNaN(searchValue)) {
    showError("JOGO NÃO ENCONTRADO!");
    showErrorMobile("JOGO NÃO ENCONTRADO!");
    return;
  }

  const steamLinks = [steam, steamMobile];
  const gameFound = games.find(
    (game) =>
      game.name.trim().toUpperCase() === searchValue.trim().toUpperCase()
  );

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
    searchBar.value = "";
    searchBar.focus();
  } else {
    showError("JOGO NÃO ENCONTRADO!");
  }
}

function modalChange(game) {
  //RESET DE TÍTULOS
  platformList.innerHTML = "<h3>Plataformas:</h3>";
  gameplayList.innerHTML = "<h3>⚔️ Principais elementos da jogabilidade:</h3>";
  awardList.innerHTML = "<h3>🥇 Principais reconhecimentos:</h3>";
  curiosities.innerHTML = "<h3>💡 Curiosidades</h3>";

  //CONTÉUDO 1
  const platforms = game.platforms.map((platform) => {
    const img = document.createElement("img");
    img.src = `${platform.url}`;
    img.alt = `${platform.alt}`;
    img.classList.add("platform-logos");
    platformList.appendChild(img);
  });

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
  const ul = document.createElement("ul");
  game.gameplayElements.map((element) => {
    const gameplayItem = document.createElement("li");
    gameplayItem.textContent = `${element}`;
    ul.appendChild(gameplayItem);
  });
  gameplayList.appendChild(ul);

  //CONTEUDO 3
  upperAward.innerHTML = `<h3>🏆 Prêmios e reconhecimentos</h3>
                          <p>${game.awardsDesc}</p>`;
  const awardUl = document.createElement("ul");
  game.awards.map((award) => {
    const awardLi = document.createElement("li");
    awardLi.textContent = `${award}`;
    awardUl.appendChild(awardLi);
  });
  awardList.appendChild(awardUl);
  legacy.innerHTML = `<h3>⭐ Legado:</h3>
                      <p>${game.legacy}</p>`;

  //CONTEUDO 4
  const curiositiesUl = document.createElement("ul");
  game.curiositiesTitle.map((title, i) => {
    const curiositiesLi = document.createElement("li");
    const curiositiesSpan = document.createElement("Span");
    const curiositiesP = document.createElement("p");
    curiositiesSpan.textContent = `${title}`;
    curiositiesP.textContent = `${game.curiosities[i]}`;

    curiositiesLi.appendChild(curiositiesSpan);
    curiositiesLi.appendChild(curiositiesP);
    curiositiesUl.appendChild(curiositiesLi);
  });
  curiosities.appendChild(curiositiesUl);
}

gameBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showInfoBySearch();
  } else {
    return;
  }
});

gameBarMobile.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showInfoBySearch();
  } else {
    return;
  }
});

function showError(msg) {
  errorMessage.innerHTML = `<p>${msg}</p>`;
  errorMessage.style.color = "#ff0000";
}

function showErrorMobile(msg) {
  errorMessageMobile.innerHTML = `<p>${msg}</p>`;
  errorMessageMobile.style.color = "#ff0000";
}

function resetToDefault(element) {
  element.innerHTML = "";
  element.style.color = "#0a0a0a";
}
