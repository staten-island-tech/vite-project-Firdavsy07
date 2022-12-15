import { predictions } from "./array";

const DOMselectors = {
  card: document.querySelector(".cardId"),
  title: document.querySelector("#title"),
  region: document.querySelector(".region"),
  confirmed: document.querySelector(".confirmed"),
  role: document.querySelector(".role"),
  theme: document.querySelector(".theme"),
  main: document.querySelector(".main"),
};

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
