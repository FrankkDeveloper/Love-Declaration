const optionY = document.getElementById("yes");
const optionN = document.getElementById("no");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("close");
const width = window.matchMedia("(max-width: 800px)");

const getRandomNumber = (val) => Math.floor(Math.random() * val);

window.addEventListener("load", () => {
  if (width.matches) {
    optionN.addEventListener("click", () => {
      optionN.style.transform = `translate(${getRandomNumber(150)}px,${getRandomNumber(200)}px)`;
    });
  } else {
    optionN.addEventListener("mouseover", () => {
      optionN.style.transform = `translate(${getRandomNumber(500)}px,${getRandomNumber(200)}px)`;
    });
  }
});

optionY.addEventListener("click", () => {
  modal.classList.add("show");
  optionN.style.display = "none";
});
btnClose.addEventListener("click", () => {
  modal.classList.remove("show");
  optionN.style.removeProperty("display");
});
