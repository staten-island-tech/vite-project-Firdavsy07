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

function destroy() {
  const characters = document.querySelectorAll(".characters");
  characters.forEach((character) => {
    character.remove();
  });
}

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

/*Main*/
DOMselectors.main.addEventListener("click", function (event) {
  destroy();
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

/*Region*/
DOMselectors.region.addEventListener("click", function (event) {
  destroy();
  predictions
    .filter((prediction) => prediction.uuid.region.includes("Noxus"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="noxus">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });

  predictions
    .filter((prediction) => prediction.uuid.region.includes("Targon"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="targon">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });

  predictions
    .filter((prediction) => prediction.uuid.region.includes("PNZ"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="pnz">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });

  predictions
    .filter((prediction) => prediction.uuid.region.includes("Runeterra"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="rune">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.region.includes("Ixtal"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="ixtal">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h4>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.region.includes("Bilgewater"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="bilge">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.region.includes("Freljord"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="frel">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.region.includes("Demacia"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="demacia">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.region.includes("Ionia"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="ionia">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.region.includes("Shurima"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="shurima">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h4>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.region.includes("Bandle"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2 class="bandle">
      ${predictions.uuid.region}
      </h2>
      <h2>${predictions.uuid.characterName}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
});

/*Role*/
DOMselectors.role.addEventListener("click", function (event) {
  destroy();
  predictions
    .filter((prediction) => prediction.uuid.predictedRole.includes("Rushdown"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h2>
      <h2>Role Prediction:${predictions.uuid.predictedRole}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.predictedRole.includes("Shoto"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h2>
      <h2>Role Prediction:${predictions.uuid.predictedRole}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.predictedRole.includes("Zoner"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h2>
      <h2>Role Prediction:${predictions.uuid.predictedRole}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.predictedRole.includes("Mimic"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h2>
      <h2>Role Prediction:${predictions.uuid.predictedRole}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) =>
      prediction.uuid.predictedRole.includes("Stance-Swapper")
    )
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h2>
      <h2>Role Prediction:${predictions.uuid.predictedRole}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.predictedRole.includes("Joke"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h2>
      <h2>Role Prediction:${predictions.uuid.predictedRole}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.predictedRole.includes("Grappler"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h4>
      <h2>Role Prediction:${predictions.uuid.predictedRole}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
});

/*Confirmed*/
DOMselectors.confirmed.addEventListener("click", function (event) {
  destroy();
  predictions
    .filter((prediction) => prediction.uuid.confirmed.includes("No"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h2>
      <h2 class="noxus">Confirmed:${predictions.uuid.confirmed}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
  predictions
    .filter((prediction) => prediction.uuid.confirmed.includes("Yes"))
    .forEach((predictions, {}) => {
      DOMselectors.container.insertAdjacentHTML(
        "afterbegin",
        `
      <div class="characters">
      <h2>${predictions.uuid.characterName}</h2>
      <h2 class="ixtal">Confirmed:${predictions.uuid.confirmed}</h2>
      <img src="${predictions.uuid.portrait}">
      </div>

`
      );
    });
});
