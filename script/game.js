/** @type {HTMLCanvasElementonDie} */

let resetButtons = document.getElementById("reset-button");

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
    this.image.src = "docs/assets/Images/game-background.jpg";
    this.win = new Image();
    this.win.src = "docs/assets/Images/youwon.jpg";
    this.speed = 0;
    this.x = 0;
    this.total = 2;
    this.checkpoints = [-200, -2228, -4136, -6060, -8052];
    this.checkpointBoss = [-10520];
  }

  start() {
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
  };

  move() {
    if (this.x > 3) this.x = 0;
    this.x += this.speed;
  }

  drawCanvas() {
    this.ctx.drawImage(this.image, this.x - 10, 0);

    ctx.font = "bold 45px sens-serif";
    ctx.fillStyle = "black";
    ctx.fillText("Time:", 68, 46);
    ctx.fillText(this.score, 193, 46);

    ctx.fillStyle = "white";
    ctx.fillText("Time:", 75, 53);
    ctx.fillText(this.score, 200, 53);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }

  updateEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].x -= 1 - this.speed;
      this.enemies[i].draw();
      metalSound.play();
      skeletonWalk.play();
    }
    if (this.x >= this.checkpoints[0] && this.x < this.checkpoints[0] + 100) {
      for (let i = 0; i <= this.total - 1; i++) {
        this.enemies.push(new Enemies(1000 + i * 150, 290, 230, 200, 60, 10));
        this.enemies.push(new Enemies(1100 + i * 150, 330, 230, 200, 60, 10));
      }
      this.total++;
      this.checkpoints.shift();
    }

    //BOSS
    for (let i = 0; i < this.boss.length; i++) {
      this.boss[i].x -= 1 - this.speed;
      this.boss[i].drawBoss();
      bossWalk.play();
      audioTorture.play();
    }

    if (this.x === this.checkpointBoss[0]) {
      this.checkpointBoss.shift();
      for (let i = 0; i < 1; i++) {
        this.boss.push(new Enemies(900, 200, 300, 300, 400, 10));
      }
    }
  }

  updateScore() {
    if (this.frames % 50 === 0) {
      this.score--;
    }
  }

  died() {
    this.stop();
    skeletonWalk.pause();
    metalSound.pause();
    skeletonDie.pause();
    swordAttack.pause();
    audioAir.pause();
    audioTorture.pause();
    bossWalk.pause();
    audioBackground.pause();
    loseGame.play();
    setTimeout(() => {
      loseGameGirlVoice.play();
    }, "1400");
    this.hero.idle = null;
    this.hero.walk = null;
    this.hero.run = null;
    this.hero.attack = null;
    this.hero.speed = null;
    ctx.font = "bold 70px arial";
    ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, 1200, 600);
    ctx.fillStyle = "red";
    ctx.fillText("GAME OVER!", 390, 200);
    ctx.font = "60px arial";
    ctx.fillStyle = "white";
    ctx.fillText("You deserve NO score!", 300, 300);
    ctx.lineWidth = 2;
    resetButtons.classList.remove("visibility");
  }

  checkWin() {
    skeletonWalk.pause();
    metalSound.pause();
    skeletonDie.pause();
    swordAttack.pause();
    audioAir.pause();
    audioTorture.pause();
    audioBackground.pause();
    running.pause();
    walkBack.pause();
    bossWalk.pause();
    this.stop();

    ctx.font = "bold 70px arial";
    ctx.fillStyle = "white";
    this.ctx.fillRect(0, 0, 1200, 600);
    ctx.fillStyle = "Blue";
    this.ctx.drawImage(this.win, 0, 0);
    ctx.font = "60px arial";
    ctx.fillStyle = "Red";
    ctx.fillText("Your final score:", 400, 200);
    if (this.score > 0 && this.score < 100) {
      ctx.fillText(this.score, 590, 280);
    } else {
      ctx.fillText(this.score, 550, 280);
    }
    ctx.lineWidth = 2;
  }

  checkGameOver() {
    const crashedEnemies = this.enemies.some((enemy) => {
      return this.hero.crashWith(enemy);
    });

    const crashedBoss = this.boss.some((boss) => {
      return this.hero.crashWith(boss);
    });

    if (this.score <= 0) {
      this.died();
    } else if (crashedEnemies && this.hero.w === 100) {
      console.log(this.hero.health);
      this.hero.health -= 2;
      if (this.hero.health < 0) {
        this.died();
      }
    } else if (crashedEnemies && this.hero.w === 160) {
      console.log(this.hero.health);
      this.hero.health -= 4;
      if (this.hero.health < 0) {
        this.died();
      }
    } else if (crashedEnemies && this.hero.w === 300) {
      this.enemies[0].health -= 1;
      if (this.enemies[0].health <= 0) {
        skeletonWalk.pause();
        this.enemies.shift();
        skeletonDie.play();
        this.score += 5;
      }
    } else if (crashedBoss && this.hero.w === 100) {
      this.hero.health -= 5;
      if (this.hero.health < 0) {
        this.died();
      }
    } else if (crashedBoss && this.hero.w === 300) {
      this.boss[0].health -= 1;
      if (this.boss[0].health <= 0) {
        this.score += 50;
        this.boss.shift();
        this.score++;
        this.checkWin();
      }
    }
  }
}
