import { gameLists } from "../services/constsAndLets";

export default async function sortGames() {
  try {
    const response = await fetch("src/assets/data/games.json");
    const data = await response.json();

    const games = [];

    data.games.forEach((game) => games.push(game.name));

    games.sort((a, b) => a.localeCompare(b));

    gameLists.forEach((list) => {
      list.innerHTML = "";
      games.forEach((g) => {
        const option = document.createElement("option");
        option.value = g;
        list.appendChild(option);
      });
    });
  } catch (error) {
    alert("ERRO AO PREENCHER LISTA DE JOGOS");
    console.log(error);
  }
}
