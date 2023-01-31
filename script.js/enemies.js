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
    }
    draw(){
        this.frames++;
        this.animation = this.monsterWalk[Math.floor(this.frames % 45 / 15)]
        ctx.drawImage(this.animation, this.x, this.y, this.w, this.h);      
    }

}