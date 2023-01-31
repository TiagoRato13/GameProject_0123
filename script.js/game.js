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
        this.score = 1000;
        this.image = new Image();
        this.image.src = '/docs/assets/Images/game-background.jpg'
        this.speed = 0;
        this.x = 0;
        this.lives = 2
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
        this.move();
    }

    move() {
        if( this.x > 3) this.x = 0;
            this.x += this.speed;
    }

    drawCanvas(){
        this.ctx.drawImage(this.image, this.x-10, 0);
        ctx.font = 'bold 45px sens-serif';
        ctx.fillStyle = 'black';
        ctx.fillText('Score:', 65, 45);
        ctx.fillText(this.score, 195, 49);

        ctx.fillStyle = 'white';
        ctx.fillText('Score:',70, 50);
        ctx.fillText(this.score,200, 54);

        ctx.fillStyle = 'black';
        ctx.fillText('Lives:', 965, 45);
        ctx.fillText(this.lives, 1095, 49);

        ctx.fillStyle = 'white';
        ctx.fillText('Lives:',970, 50);
        ctx.fillText(this.lives,1100, 54);
    }

    stop() {
        clearInterval(this.intervalId);
    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    
    updateEnemies() {
        if(this.x <= -250 || this.enemies.visibility === true) {
            this.enemies.visibility = true;
            const total = 2;

            for(let i = 0; i < this.enemies.length; i++) {
                this.enemies[i].x -= 1;
                this.enemies[i].draw();
            }
    
            for (let i = 0; i < total; i++){
                if(this.frames % 120 === 0 && i < total) {
                    this.enemies.push(new Enemies(1000, 400, 100, 100, 30, 10))
                }
            }        
        }
    }

    updateScore(){
        if(this.frames % 30 === 0) {
            this.score--;
        }
    }

    checkGameOver() {
        const crashed = this.enemies.some((enemy) => {
            return this.hero.crashWith(enemy);
        });
        if(crashed && this.hero.w === 100) {
            this.lives--;
            this.stop();
            ctx.font = 'bold 70px arial';
            ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, 1200, 600);
            ctx.fillStyle = 'red';
            ctx.fillText('GAME OVER!',390, 100)
            ctx.font = '60px arial';
            ctx.fillStyle = 'white';
            ctx.fillText('Your final score:', 400, 200);
            if(this.score > 0 && this.score < 100) {
                ctx.fillText(this.score,490, 280);
            } else if(this.score >= 100 || this.score < 1000){
                ctx.fillText(this.score,195, 530);
            }else{
                ctx.fillText(this.score,140, 530);
            }
            ctx.lineWidth = 2
            this.hero.remove(draw);
        }else if (crashed && this.hero.w === 200){
            this.enemies[0].health -= 1;
            if(this.enemies[0].health <= 0){
                this.enemies.shift();
                this.score++;

            }
            
        }
    }
}