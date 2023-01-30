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
        this.ctx.drawImage(this.image, 0, 0);
        ctx.font = 'bold 45px sens-serif';
        ctx.fillStyle = 'black';
        ctx.fillText('Score:',65, 45);
        ctx.fillText(this.score, 195, 49);
        ctx.fillStyle = 'white';
        ctx.fillText('Score:',70, 50);
        ctx.fillText(this.score,200, 54);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }

    updateEnemies() {
        for(let i = 0; i < this.enemies.length; i++) {
            this.enemies[i].x -= 1;
            this.enemies[i].draw();
        }

        if(this.frames % 240 === 0) {
            this.enemies.push(new Enemies(1000, 400, 100, 100,'red'))
        }
    }

    updateScore(){
        if(this.frames % 30 === 0) {
            this.score++;
        }
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