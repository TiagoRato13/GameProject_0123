/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const startButton = document.getElementById('start-button');

const hero = new Hero(50, 400, 200, 100, 50, 10, 'Image',ctx);

startButton.onclick = function () {
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
        case 'Space':
            hero.w += 10;
            break;
    }
});

document.addEventListener('keyup', () => {
    hero.moveX = 0;
    hero.jump = 0
});