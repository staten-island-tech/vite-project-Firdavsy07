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
  console.log("working");

  DOMselectors.container.insertAdjacentHTML(
    "afterend",
    `<div class="character-div">
      <p></p>
      
      </div>`
  );
});

predictions.forEach((predictions, {}) => {
  DOMselectors.container.insertAdjacentHTML(
    `"afterbegin",
      <div class="noxus">
      <p class="announce-region">
      <img src="${predictions.uuid.portrait.includes(
        "https://static.wikia.nocookie.net/leagueoflegends/images/6/6b/01NX042T2-hd-full.jpg/revision/latest?cb=20191202234207"
      )}">
      </p>
      </div>
`
  );
});
