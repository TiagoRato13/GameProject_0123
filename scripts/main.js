/** @type {HTMLCanvasElement} */

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");
ctx.font = "70px pixelig_cursiefregular";

let game = null;
let hero;
const health = 200;
const strength = 10;

let controls = document.getElementById("controls");
let homeScreen = document.getElementById("reset-button__home");
let screen = document.getElementById("canvas-screen");
let title = document.getElementById("game-title");
let startButton = document.getElementById("start-button");

startButton.onclick = function () {
  startGame();
  audioAir.play();
  audioBackground.play();
};

homeScreen.onclick = function () {
  window.location.reload();
};

function startGame() {
  screen.classList.toggle("visibility");
  controls.classList.toggle("visibility");
  title.classList.toggle("visibility");
  startButton.classList.toggle("visibility");
  hero = new Mage(150, 310, 100, 200, health, strength);
  game = new Game(ctx, canvas.width, canvas.height, hero);

  hero.start();
  game.start();
}

document.addEventListener("keypress", (e) => {
  switch (e.code) {
    case "KeyA":
      hero.walk = true;
      hero.idle = false;
      hero.attack = false;
      hero.run = false;
      if (game.x + 4 <= 0 || !hero.death) {
        game.speed = 2;
        walkBack.play();
        running.pause();
      }
      if (game.theEnd || game.finished) {
        walkBack.pause();
      }
      break;

    case "KeyD":
      hero.run = true;
      hero.idle = false;
      hero.attack = false;
      hero.walk = false;
      if (game.x >= -10850 || !hero.death) {
        game.speed = -4;
        running.play();
        walkBack.pause();
      }
      if (game.theEnd || game.finished) {
        running.pause();
      }
      break;

    case "Space":
      if (!hero.death) {
        hero.attack = true;
        swordAttack.play();
      }
      if (game.theEnd || game.finished) {
        swordAttack.pause();
      }
      hero.idle = false;
      hero.run = false;
      hero.walk = false;
      game.speed = 0;
      running.pause();
      walkBack.pause();
      break;
  }
});

document.addEventListener("keyup", () => {
  game.speed = 0;
  hero.w = 100;
  hero.idle = true;
  hero.attack = false;
  hero.run = false;
  hero.walk = false;
  running.pause();
  walkBack.pause();
});
