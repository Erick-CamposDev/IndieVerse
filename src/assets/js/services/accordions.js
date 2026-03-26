import { extraContent } from "./constsAndLets.js";

export function verifyContent(game) {
  const itHas = game.extraSection.itHas;

  if (!itHas) {
    extraContent.innerHTML = "";
    return;
  } else {
    extraContent.innerHTML = "";
    showAccordions(game);
  }
}

export function showAccordions(game) {
  game.extraSection.extraContent.forEach((p) => {
    const accordion = document.createElement("div");
    accordion.style.backgroundImage = `url("${p.contentImg}")`;
    accordion.classList.add("accordion");

    const accBtn = document.createElement("button");
    accBtn.classList.add("accordion-header");
    accBtn.innerHTML = `${p.accName} <i class="bi bi-arrow-up-circle"></i>`;

    const accContent = document.createElement("div");
    accContent.classList.add("accordion-content");
    const overview = document.createElement("div");

    overview.innerHTML = `  <h2 class="overview-title">🔎 Visão Geral:</h2>
                            <p class="extra-name">Nome do conteúdo: <span>${p.contentName}</span></p>
                            <p class="extra-data">Data de lançamento: ${p.contentDate}</p>`;

    const synopisis = document.createElement("div");
    synopisis.innerHTML = ` <h2 class="synopisis">📘 Sinopse:</h2>
                            <p>${p.synopisis}</p>`;

    const characters = document.createElement("div");
    const charList = p.characters.map((c) => `<li>${c}</li>`).join("");
    characters.innerHTML = `<h2 class="acc-characters">🚹 Personagens: </h2>
              <ul class="acc-ul">
                ${charList}
              </ul>`;

    const antagonistContent = document.createElement("div");
    const featureList = p.antagonist.features
      .map((f) => `<li>${f}</li>`)
      .join("");
    antagonistContent.innerHTML = `<h2 class="main-antagonist-title">👿 Antagonista:</h2>
                                     <h3 class="antagonist-name">Nome: <span>${p.antagonist.antagonistName}</span></h3>
                                     <h4 class="antagonist-features">Características:</h4>
                                     <ul class="acc-ul">
                                        ${featureList}
                                     </ul>`;

    const loreContent = document.createElement("div");
    loreContent.innerHTML = ` <h2 class="lore-title">📚 Lore:</h2>
                              <p>${p.lore}</p>`;

    const gameplayMechanicsContent = document.createElement("div");
    const mechanicList = p.gameplayMechanics
      .map((g) => `<li>${g}</li>`)
      .join("");
    gameplayMechanicsContent.innerHTML = `<h2 class="mechanics-title">🎮 Novas Mecânicas:</h2>
                                   <ul class="acc-ul">
                                      ${mechanicList}
                                   </ul>`;

    const accSteam = document.createElement("div");
    accSteam.classList.add("acc-steam");
    accSteam.innerHTML = `<a class="acc-steam-btn" href="${p.steamLink}" target="_blank"><img alt="Ir para a página da steam do conteúdo" src="src/assets/imgs/game-platforms/Steam-logo.png"></a>
                          <p>Acesse o conteúdo na steam!</p>`;

    const isMobile = window.matchMedia("(max-width: 766px)");

    accBtn.addEventListener("click", () => {
      const headers = document.querySelectorAll(".accordion-header");
      const otherContents = document.querySelectorAll(".accordion-content");

      headers.forEach((h) => {
        if (h !== accBtn) {
          h.classList.remove("active");
        }
      });

      otherContents.forEach((c) => {
        if (c !== accContent) {
          c.classList.remove("active");

          if (isMobile.matches) {
            c.style.height = "0px";
          } else {
            c.style.height = "";
          }
        }
      });

      accBtn.classList.toggle("active");
      accContent.classList.toggle("active");

      if (isMobile.matches) {
        if (accContent.classList.contains("active")) {
          accContent.style.height = accContent.scrollHeight + 50 + "px";
        } else {
          accContent.style.height = "0px";
        }
      }
    });

    accordion.appendChild(accBtn);
    accordion.appendChild(accContent);
    accContent.append(
      overview,
      synopisis,
      characters,
      antagonistContent,
      loreContent,
      gameplayMechanicsContent,
      accSteam,
    );
    extraContent.appendChild(accordion);
  });
}
