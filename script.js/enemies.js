class Enemies extends Component{
    constructor(x, y, w, h, health, strength){
        super(x, y, w, h, health, strength)
        this.frames = 0;
        this.visibility = false

        const monster1 = new Image();
        const monster2 = new Image();
        const monster4 = new Image();

        monster1.src = "/docs/assets/Images/MonsterOne/monster1-1.png";
        monster2.src = "/docs/assets/Images/MonsterOne/monster1-2.png";
        monster4.src = "/docs/assets/Images/MonsterOne/monster1-4.png";
        this.animation = monster1;
        this.monsterWalk = [monster1,monster2, monster4];


        const boss1 = new Image();
        const boss2 = new Image();

        boss1.src = '/docs/assets/Images/boss/boss1.png'
        boss2.src = '/docs/assets/Images/boss/boss2.png'

        this.boss = [boss1, boss2]
    }
    draw(){
        this.frames++;
        this.animation = this.monsterWalk[Math.floor(this.frames % 45 / 15)]
        ctx.drawImage(this.animation, this.x, this.y, this.w, this.h);      
    }

    drawBoss(){
        this.frames++;
        this.animation = this.boss[Math.floor(this.frames % 30 / 15)]
        ctx.drawImage(this.animation, this.x, this.y, this.w, this.h);  
    }


}