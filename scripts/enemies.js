class Enemies extends Component {
  constructor(x, y, w, h, health, strength) {
    super(x, y, w, h, health, strength);
    this.frames = 0;
    this.visibility = false;

    const monster1 = new Image();
    const monster2 = new Image();
    const monster3 = new Image();
    const monster4 = new Image();
    const monster5 = new Image();
    const monster6 = new Image();
    const monster7 = new Image();

    monster1.src = "docs/assets/Images/MonsterOne/monster1_1.png";
    monster2.src = "docs/assets/Images/MonsterOne/monster1_2.png";
    monster3.src = "docs/assets/Images/MonsterOne/monster1_3.png";
    monster4.src = "docs/assets/Images/MonsterOne/monster1_4.png";
    monster5.src = "docs/assets/Images/MonsterOne/monster1_5.png";
    monster6.src = "docs/assets/Images/MonsterOne/monster1_6.png";
    monster7.src = "docs/assets/Images/MonsterOne/monster1_7.png";

    this.animation = monster1;
    this.monsterWalk = [
      monster1,
      monster2,
      monster3,
      monster4,
      monster5,
      monster6,
      monster7,
    ];

    const boss1 = new Image();
    const boss2 = new Image();
    const boss3 = new Image();
    const boss4 = new Image();
    const boss5 = new Image();
    const boss6 = new Image();
    const boss7 = new Image();
    const boss8 = new Image();
    const boss9 = new Image();
    const boss10 = new Image();
    const boss11 = new Image();
    const boss12 = new Image();
    const boss13 = new Image();
    const boss14 = new Image();
    const boss15 = new Image();
    const boss16 = new Image();
    const boss17 = new Image();
    boss1.src = "docs/assets/Images/boss/boss1.png";
    boss2.src = "docs/assets/Images/boss/boss2.png";
    boss3.src = "docs/assets/Images/boss/boss3.png";
    boss4.src = "docs/assets/Images/boss/boss4.png";
    boss5.src = "docs/assets/Images/boss/boss5.png";
    boss6.src = "docs/assets/Images/boss/boss6.png";
    boss7.src = "docs/assets/Images/boss/boss7.png";
    boss8.src = "docs/assets/Images/boss/boss8.png";
    boss9.src = "docs/assets/Images/boss/boss9.png";
    boss10.src = "docs/assets/Images/boss/boss10.png";
    boss11.src = "docs/assets/Images/boss/boss11.png";
    boss12.src = "docs/assets/Images/boss/boss12.png";
    boss13.src = "docs/assets/Images/boss/boss13.png";
    boss14.src = "docs/assets/Images/boss/boss14.png";
    boss15.src = "docs/assets/Images/boss/boss15.png";
    boss16.src = "docs/assets/Images/boss/boss16.png";
    boss17.src = "docs/assets/Images/boss/boss17.png";
    this.boss = [
      boss1,
      boss2,
      boss3,
      boss4,
      boss5,
      boss6,
      boss7,
      boss8,
      boss9,
      boss10,
      boss11,
      boss12,
      boss13,
      boss14,
      boss15,
      boss16,
      boss17,
    ];
  }

  draw() {
    this.frames++;
    this.animation = this.monsterWalk[Math.floor((this.frames % 45) / 15)];
    ctx.drawImage(this.animation, this.x, this.y, this.w, this.h);
  }

  drawBoss() {
    this.frames++;
    this.animation = this.boss[Math.floor((this.frames % 30) / 15)];
    ctx.drawImage(this.animation, this.x, this.y, this.w, this.h);
  }
}
