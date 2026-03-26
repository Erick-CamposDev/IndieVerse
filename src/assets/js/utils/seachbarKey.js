import showInfoBySearch from "../services/searchGame.js";

export function searchByPressingEnter(device) {
  device.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      showInfoBySearch();
    } else {
      return;
    }
  });
}
