class Mage extends Component {
  constructor(x, y, w, h, health, strength) {
    super(x, y, w, h, health, strength);
    this.intervalId = null;
    this.frames = 0;
    this.animation = 0;
    this.idle = true;
    this.attack = false;
    this.run = false;
    this.walk = false;
    this.death = false;

    //IDLE
    const idle1 = new Image();
    const idle2 = new Image();
    const idle3 = new Image();
    const idle4 = new Image();
    const idle5 = new Image();
    const idle6 = new Image();
    const idle7 = new Image();
    idle1.src = "docs/assets/Images/LightningMage/idle/Idle1.png";
    idle2.src = "docs/assets/Images/LightningMage/idle/Idle2.png";
    idle3.src = "docs/assets/Images/LightningMage/idle/Idle3.png";
    idle4.src = "docs/assets/Images/LightningMage/idle/Idle4.png";
    idle5.src = "docs/assets/Images/LightningMage/idle/Idle5.png";
    idle6.src = "docs/assets/Images/LightningMage/idle/Idle6.png";
    idle7.src = "docs/assets/Images/LightningMage/idle/Idle7.png";

    //ATTACK
    const attack1 = new Image();
    const attack2 = new Image();
    const attack3 = new Image();
    const attack4 = new Image();

    attack1.src = "docs/assets/Images/LightningMage/attack/attack1.png";
    attack2.src = "docs/assets/Images/LightningMage/attack/attack2.png";
    attack3.src = "docs/assets/Images/LightningMage/attack/attack3.png";
    attack4.src = "docs/assets/Images/LightningMage/attack/attack4.png";

    //RUN
    const run1 = new Image();
    const run2 = new Image();
    const run3 = new Image();
    const run4 = new Image();
    const run5 = new Image();
    const run6 = new Image();
    const run7 = new Image();
    const run8 = new Image();

    run1.src = "docs/assets/Images/LightningMage/run/Run1.png";
    run2.src = "docs/assets/Images/LightningMage/run/Run2.png";
    run3.src = "docs/assets/Images/LightningMage/run/Run3.png";
    run4.src = "docs/assets/Images/LightningMage/run/Run4.png";
    run5.src = "docs/assets/Images/LightningMage/run/Run5.png";
    run6.src = "docs/assets/Images/LightningMage/run/Run6.png";
    run7.src = "docs/assets/Images/LightningMage/run/Run7.png";
    run8.src = "docs/assets/Images/LightningMage/run/Run8.png";

    //WALK
    const walk1 = new Image();
    const walk2 = new Image();
    const walk3 = new Image();
    const walk4 = new Image();
    const walk5 = new Image();
    const walk6 = new Image();
    const walk7 = new Image();

    walk1.src = "docs/assets/Images/LightningMage/walk/walk1.png";
    walk2.src = "docs/assets/Images/LightningMage/walk/walk2.png";
    walk3.src = "docs/assets/Images/LightningMage/walk/walk3.png";
    walk4.src = "docs/assets/Images/LightningMage/walk/walk4.png";
    walk5.src = "docs/assets/Images/LightningMage/walk/walk5.png";
    walk6.src = "docs/assets/Images/LightningMage/walk/walk6.png";
    walk7.src = "docs/assets/Images/LightningMage/walk/walk7.png";

    //DEATH
    const death1 = new Image();
    const death2 = new Image();
    const death3 = new Image();
    const death4 = new Image();
    const death5 = new Image();
    const death6 = new Image();
    death1.src = "docs/assets/Images/LightningMage/death/death1.png";
    death2.src = "docs/assets/Images/LightningMage/death/death2.png";
    death3.src = "docs/assets/Images/LightningMage/death/death3.png";
    death4.src = "docs/assets/Images/LightningMage/death/death4.png";
    death5.src = "docs/assets/Images/LightningMage/death/death5.png";
    death6.src = "docs/assets/Images/LightningMage/death/death6.png";

    //movement arrays
    this.mageIdle = [idle1, idle2, idle3, idle4, idle5, idle6, idle7];
    this.mageAttack = [
      attack1,
      attack2,
      attack3,
      attack4,
      attack3,
      attack2,
      attack1,
    ];
    this.mageRun = [run1, run2, run3, run4, run5, run6, run7, run8];
    this.mageWalk = [walk1, walk2, walk3, walk4, walk5, walk6, walk7];
    /* this.mageDeath = [death1, death2, death3, death4, death5, death6]; */
  }
  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
  }
  stop() {
    clearInterval(this.intervalId);
  }
  update = () => {
    this.frames++;
    this.draw();
  };
  draw = () => {
    if (this.idle) {
      if (this.frames % 12 === 0) {
        this.animation = (this.animation + 1) % this.mageIdle.length;
      }
      if (this.health > 0) {
        ctx.drawImage(
          this.mageIdle[this.animation],
          this.x,
          this.y,
          this.w,
          this.h
        );
      }
    }
    if (this.attack) {
      if (this.frames % 12 === 0) {
        this.animation = (this.animation + 1) % this.mageAttack.length;
      }
      this.w = 300;
      if (this.health > 0) {
        ctx.drawImage(
          this.mageAttack[this.animation],
          this.x,
          this.y,
          this.w,
          this.h
        );
      }
    }
    if (this.run) {
      if (this.frames % 12 === 0) {
        this.animation = (this.animation + 1) % this.mageRun.length;
      }
      this.w = 160;
      if (this.health > 0) {
        ctx.drawImage(
          this.mageRun[this.animation],
          this.x,
          this.y,
          this.w,
          this.h
        );
      }
    }
    if (this.walk) {
      if (this.frames % 12 === 0) {
        this.animation = (this.animation + 1) % this.mageWalk.length;
      }
      if (this.health > 0) {
        ctx.drawImage(
          this.mageWalk[this.animation],
          this.x,
          this.y,
          this.w,
          this.h
        );
      }
    }
    if (this.death) {
      setInterval(() => {
        if (this.animation < 6) {
          this.animation = this.animation + 1;
        }
      }, 300);

      if (this.animation < 5) {
        ctx.fillStyle = "black";
        ctx.fillRect(150, 310, 150, 250);
      }

      ctx.drawImage(
        this.mageDeath[this.animation],
        this.x,
        this.y,
        this.w,
        this.h
      );
      setTimeout(() => {
        clearInterval(this.intervalId);
      }, 500);
    }
  };
  moveRight() {
    this.x += this.moveX;
  }
}
