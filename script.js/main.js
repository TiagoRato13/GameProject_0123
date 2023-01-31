/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const hero = new Mage(150, 310, 100, 200, 20, 10);

let screen = document.getElementById('canvas-screen');
let title = document.getElementById('game-title');
let startButton = document.getElementById('start-button');
let game = null;

startButton.onclick = function () {
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
            if (game.x +4 <= 0){
                game.speed = 4; 
                game.enemies[i].x -= 50;
            }      
            break;
        
        case 'KeyD':
            if( game.x >= -10800){
                game.speed = -4;
            }
            break;
    }
})

document.addEventListener('keyup', () => {
    game.speed = 0;
});