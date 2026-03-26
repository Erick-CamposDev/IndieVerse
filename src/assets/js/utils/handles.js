import { errorMessage, errorMessageMobile } from "../services/constsAndLets.js";

export function showError(msg) {
  errorMessage.innerHTML = `<p>${msg}</p>`;
  errorMessage.style.color = "#ff0000";
}

export function showErrorMobile(msg) {
  errorMessageMobile.innerHTML = `<p>${msg}</p>`;
  errorMessageMobile.style.color = "#ff0000";
}

export function resetToDefault(element) {
  element.innerHTML = "";
  element.style.color = "#0a0a0a";
}
