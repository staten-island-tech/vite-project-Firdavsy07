const DOMselectors = {
  card: document.querySelector(".cardId"),
  title: document.querySelector("#title"),
  btn: document.querySelector("#btn"),
};

console.log(DOMselectors.btn);
DOMselectors.btn.addEventListener("click", function () {
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
