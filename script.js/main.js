/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const hero = new Hero(150, 300, 100, 200, 150, 10, 'black',ctx);

let screen = document.getElementById('canvas-screen');
let title = document.getElementById('game-title');
let startButton = document.getElementById('start-button');
startButton.onclick = function () {
    screen.classList.toggle('visibility');
    title.classList.toggle('visibility');
    startButton.classList.toggle('visibility');
    const game = new Game(ctx, canvas.width, canvas.height, hero);
    game.start();

}

document.addEventListener('keydown', (e) => {
    switch(e.code){
        case 'KeyA':
            hero.moveX -= 2;            
            break;
        case 'KeyD':
            hero.moveX += 2;
            break;
    }
});

document.addEventListener('keyup', () => {
    hero.moveX = 0;
    hero.jump = 0
});