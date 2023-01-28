/** @type {HTMLCanvasElement} */

const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

const startButton = document.getElementById('start-button');

const hero = new Hero(150, 300, 100, 200, 150, 10, 'black',ctx);

startButton.onclick = function () {
    const game = new Game(ctx, canvas.width, canvas.height, hero);
    game.start();

}

document.addEventListener('keypress', (e) => { 
    switch(e.code){
        case 'KeyA':
            hero.moveX -= 2;            
            break;
        case 'KeyD':
            hero.moveX += 2;
            break;
        case 'KeyQ':
            hero.w +=70;
            break;
    }
});

document.addEventListener('keyup', () => {
    hero.moveX = 0;
    hero.jump = 0;
    hero.w -= 70;
});