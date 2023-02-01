/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

let game = null;

const health = 200;
const strength = 10

let restart = document.getElementById('reset-button__restart')
let homeScreen = document.getElementById('reset-button__home')

const hero = new Mage(150, 310, 100, 200, health, strength);

let screen = document.getElementById('canvas-screen');
let title = document.getElementById('game-title');
let startButton = document.getElementById('start-button');


startButton.onclick = function () {
    startGame();
}
restart.onclick = function () {
    resetButtons.classList.add('visibility');

    game.hero.health = health
    game.intervalId = null;
    game.frames = 0;
    game.enemies = [];
    game.boss = [];
    game.score = 1000;
    game.speed = 0;
    game.x = 0;
    game.total = 2;
    game.checkpoints = [-220, -2228, -4136, -6060, -8052];
    game.checkpointBoss = [-10520]

    game.start();
}


homeScreen.onclick = function () {
    window.location.reload();
}

function startGame () {
    
    screen.classList.toggle('visibility');
    title.classList.toggle('visibility');
    startButton.classList.toggle('visibility');
    
    game = new Game(ctx, canvas.width, canvas.height, hero);
    hero.start();
    game.start();
}

document.addEventListener('keypress', (e) => {
    switch(e.code){
        case 'KeyA':
            hero.walk = true;
            hero.idle =false;
            hero.attack = false;
            hero.run = false;
            if (game.x +4 <= 0){
                game.speed = 2;
            }      
            break;
        
        case 'KeyD':
            hero.run = true;
            hero.idle =false;
            hero.attack = false;
            hero.walk = false;
            if( game.x >= -10850){
                game.speed = -4;
            }
            break;

            case 'Space':
            hero.attack = true;
            hero.idle = false;
            hero.run = false;
            hero.walk = false;
            game.speed = 0;
            break;
    }
})

document.addEventListener('keyup', () => {
  
    game.speed = 0;
    hero.w = 100;
    hero.idle = true;
    hero.attack = false;
    hero.run = false;
    hero.walk = false;
});