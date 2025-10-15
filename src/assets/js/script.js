const openModalBtn = document.getElementById("showMoreBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const modal = document.querySelector(".modal-bg");

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
  const searchValue = gameBar.value || gameBarMobile.value;

  resetToDefault(errorMessage);
  resetToDefault(errorMessageMobile);

  if (searchValue === "" || !isNaN(searchValue.value)) {
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
    gameLogo.src = gameFound.logo;
    gameCharacter.src = gameFound.character;
    gameType.innerHTML = `<h2>${gameFound.type}</h2>`;
    gameDescription.innerHTML = `<p>${gameFound.description}</p>`;
    main.style.backgroundImage = `url(${gameFound.background})`;
    steamLinks.forEach((url) => {
      url.href = `${gameFound.url}`;
    });
    modalChange(gameFound);
  } else {
    showError("JOGO NÃO ENCONTRADO!");
  }
}

function modalChange(game) {
  platformList.innerHTML = "<h3>Plataformas:</h3>";

  const platforms = game.platforms.map((platform) => {
    const img = document.createElement("img");
    img.src = `${platform}`;
    img.classList.add("platform-logos");
    platformList.appendChild(img);
  });

  gameTitle.innerHTML = `<h2>${game.name}</h2>`;
  creator.src = `${game.creatorLogo}`;
  dataLaunch.innerText = `${game.data}`;
  gameTypeModal.innerText = `${game.type}`;
  gameContent.innerHTML = `<h3>História:</h3>
                           <p>${game.history}</p>`;
}

gameBar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    showInfoBySearch();
  } else {
    return;
  }
});

function showInfo() {}

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
