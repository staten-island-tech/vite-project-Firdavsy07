import { predictions } from "./array";

const DOMselectors = {
  card: document.querySelector(".cardId"),
  title: document.querySelector("#title"),
  region: document.querySelector(".region"),
  confirmed: document.querySelector(".confirmed"),
  role: document.querySelector(".role"),
  theme: document.querySelector(".theme"),
  main: document.querySelector(".characters"),
  button: document.querySelector("#btn"),
  container: document.querySelector(".container"),
};

DOMselectors.button.addEventListener("click", function (card) {
  card.preventDefault();
});

console.log(DOMselectors.theme);
DOMselectors.theme.addEventListener("click", function () {
  console.log("Success!");
  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.contains("light-mode");
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }
});

DOMselectors.main.addEventListener("click", function (event) {
  event.preventDefault();

  if (document.body.classList.contains("character-div")) {
    document.body.classList.remove("character-div");
  } else {
    DOMselectors.container.insertAdjacentHTML(
      "afterend"`<div class="character-div">
      <p></p>
      
      </div>`
    );
  }
});
