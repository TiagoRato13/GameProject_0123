/** @type {HTMLCanvasElement} */

class Game {
    constructor(ctx, width, height, hero) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.hero = hero;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
        this.score = 0;
        this.image = new Image();
        this.image.src = '/docs/assets/Images/game-background.jpg'
    }

    start(){
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.clear();
        this.drawCanvas();
        this.hero.draw();
        this.hero.moveRight();
        this.updateEnemies();
        this.checkGameOver();
        this.updateScore();
    }

    drawCanvas(){
        this.ctx.drawImage(this.image, -10, 0);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    checkGameOver() {
        const crashed = this.enemies.some((enemy) => {
            return this.hero.crashWith(enemy);
        });
        if(crashed) {
            this.stop();
        }
    }
}