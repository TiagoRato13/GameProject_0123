/** @type {HTMLCanvasElement} */

let resetButtons = document.getElementById('reset-button')
class Game {
    constructor(ctx, width, height, hero) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.hero = hero;
        this.intervalId = null;
        this.frames = 0;
        this.enemies = [];
        this.boss = [];
        this.score = 100;
        this.image = new Image();
        this.image.src = '/docs/assets/Images/game-background.jpg'
        this.speed = 0;
        this.x = 0;
        this.total = 2;
        this.checkpoints = [-200, -2228, -4136, -6060, -8052];
        this.checkpointBoss = [-10520]
    }

    start(){
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.clear();
        this.drawCanvas();
        this.hero.moveRight();
        this.updateEnemies();
        this.checkGameOver();
        this.updateScore();
        this.move();
        this.hero.draw();
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
    }

    stop() {
        clearInterval(this.intervalId);

    }

    clear() {
        this.ctx.clearRect(0, 0, this.width, this.height);
    }
    
    updateEnemies() {
        for(let i = 0; i < this.enemies.length; i++) {
            
            this.enemies[i].x -= 1 - this.speed;
            
            this.enemies[i].draw();
        }
        if(this.x === this.checkpoints[0]) {
            this.checkpoints.shift()
            for (let i = 0; i <= this.total; i++){
                this.enemies.push(new Enemies(1000 + i * 100 , 400, 100, 100, 60, 10))
            }   
            this.total++;            
        }

        //BOSS
        for(let i = 0; i < this.boss.length; i++) {
            
            this.boss[i].x -= 1 - this.speed;
            
            this.boss[i].drawBoss();
        }

        if(this.x === this.checkpointBoss[0]){
            this.checkpointBoss.shift()
            for (let i = 0; i < 1; i++){
                this.boss.push(new Enemies(900, 200, 300, 300, 400, 10))
            }   
        }
    }

    updateScore(){
        if(this.frames % 50 === 0) {
            this.score--;
        }
    }

    checkWin(){
        this.stop();
        
            ctx.font = 'bold 70px arial';
            ctx.fillStyle = 'white';
            this.ctx.fillRect(0, 0, 1200, 600);
            ctx.fillStyle = 'Blue';
            ctx.fillText('You Won',390, 100)
            ctx.font = '60px arial';
            ctx.fillStyle = 'Red';
            ctx.fillText('Your final score:', 400, 200);
            if(this.score > 0 && this.score < 100) {
                ctx.fillText(this.score,590, 280);
            } else{
                ctx.fillText(this.score,550, 280);
            }
            ctx.lineWidth = 2
    }

    checkGameOver() {
        const crashedEnemies = this.enemies.some((enemy) => {
            return this.hero.crashWith(enemy);
        });

        const crashedBoss = this.boss.some((boss) => {
            return this.hero.crashWith(boss);
        });


        
        if(crashedEnemies && this.hero.w === 100 || crashedBoss && this.hero.w === 100) {
            this.stop();
            this.hero.death = true;
            this.hero.idle=false;
            this.hero.walk=false;
            this.hero.run=false;
            this.hero.attack=false;
            this.hero.speed=0;
            ctx.font = 'bold 70px arial';
            ctx.fillStyle = 'black';
            this.ctx.fillRect(0, 0, 1200, 600);
            ctx.fillStyle = 'red';
            ctx.fillText('GAME OVER!',390, 100)
            ctx.font = '60px arial';
            ctx.fillStyle = 'white';
            ctx.fillText('Your final score:', 400, 200);
            if(this.score > 0 && this.score < 100) {
                ctx.fillText(this.score,590, 280);
            } else{
                ctx.fillText(this.score,550, 280);
            }
            ctx.lineWidth = 2
        }else if (crashedEnemies && this.hero.w === 300){
            this.enemies[0].health -= 1;
            if(this.enemies[0].health <= 0){
                this.enemies.shift();
                this.score++;
            }
            
        }else if(crashedBoss && this.hero.w === 100) {
            this.hero.health -= 5;
            if(this.hero.health <= 0){
                this.stop();
                resetButtons.classList.remove('visibility');
                ctx.font = 'bold 70px arial';
                ctx.fillStyle = 'black';
                this.ctx.fillRect(0, 0, 1200, 600);
                ctx.fillStyle = 'red';
                ctx.fillText('GAME OVER!',390, 100)
            }   

        }else if(crashedBoss && this.hero.w === 300) {
            this.boss[0].health -= 1;
            if(this.boss[0].health <= 0){
                this.boss.shift();
                this.score++;
                this.checkWin();

            }
        }
    }
}