const startBtn = document.querySelector(".start");
const screens = document.querySelectorAll(".screen");
const timelist = document.querySelector(".time__list");
const reload = document.querySelector(".game__new");
const timeEl = document.querySelector("#time");
const board = document.querySelector(".board");

let time = 0;

console.log("time:", time);
console.log(timelist);
startBtn.addEventListener("click", () => {
  screens[0].classList.add("up");
});

timelist.addEventListener("click", (e) => {
  if (e.target.classList.contains("time__btn")) {
    time = parseInt(e.target.getAttribute("data-time"));
    screens[1].classList.add("up");
    console.log("time:", time);
    startGame();
  }
});
function startGame() {
  setInterval(decreaseTime, 1000);
  setTime(time);
}
function decreaseTime() {
  if (time === 0) {
    finishGame();
  } else {
    let current = --time;
    if (current < 10) {
      current = `0${current}`;
    }
    setTime(current);
  }
}
function setTime(value) {
  timeEl.innerHTML = `00:${value}`;
}

function finishGame() {
  board.innerHTML = `<h3>Ваш раунок:<h3/>`;
}
setTime();
reload.addEventListener("click", () => {
  location.reload();
});
