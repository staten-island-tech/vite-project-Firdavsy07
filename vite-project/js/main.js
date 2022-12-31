import { predictions } from "./array";

const DOMselectors = {
  card: document.querySelector(".cardId"),
  title: document.querySelector("#title"),
  region: document.querySelector(".region"),
  confirmed: document.querySelector(".confirmed"),
  role: document.querySelector(".role"),
  theme: document.querySelector(".theme"),
  main: document.querySelector(".character"),
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
  predictions.forEach((predictions, {}) => {
    DOMselectors.container.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="characters">
      <h2 class="announce-region">
      ${predictions.uuid.region}
      </h2>
      <h4>${predictions.uuid.characterName}</h4>
      <h4>Role Prediction:${predictions.uuid.predictedRole}</h4>
      <h4>Confirmed?${predictions.uuid.confirmed}</h4>
      <img src="${predictions.uuid.portrait}">
      </div>

`
    );
  });
});

DOMselectors.region.addEventListener("click", function (event) {
  event.preventDefault();
  predictions.forEach((predictions, {}) => {
    DOMselectors.container.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="characters">
      <h2 class="announce-region">
      ${predictions.uuid.region}
      </h2>
      <h4>${predictions.uuid.characterName}</h4>
      <h4>Role Prediction:${predictions.uuid.predictedRole}</h4>
      <h4>Confirmed?${predictions.uuid.confirmed}</h4>
      <img src="${predictions.uuid.portrait}">
      </div>

`
    );
  });
});

DOMselectors.role.addEventListener("click", function (event) {
  event.preventDefault();
  predictions.forEach((predictions, {}) => {
    DOMselectors.container.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="characters">
      <h2 class="announce-region">
      ${predictions.uuid.region}
      </h2>
      <h4>${predictions.uuid.characterName}</h4>
      <h4>Role Prediction:${predictions.uuid.predictedRole}</h4>
      <h4>Confirmed?${predictions.uuid.confirmed}</h4>
      <img src="${predictions.uuid.portrait}">
      </div>

`
    );
  });
});

DOMselectors.confirmed.addEventListener("click", function (event) {
  event.preventDefault();
  predictions.forEach((predictions, {}) => {
    DOMselectors.container.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="characters">
      <h2 class="announce-region">
      ${predictions.uuid.region}
      </h2>
      <h4>${predictions.uuid.characterName}</h4>
      <h4>Role Prediction:${predictions.uuid.predictedRole}</h4>
      <h4>Confirmed?${predictions.uuid.confirmed}</h4>
      <img src="${predictions.uuid.portrait}">
      </div>

`
    );
  });
});
