class Enemies extends Component{
    constructor(x, y, w, h){
        super(x, y, w, h)
        this.animation = 1;
        this.health = 5;
        this.strength = 2;
        this.visibility = false

        const monster1 = new Image();
        const monster2 = new Image();
        const monster3 = new Image();
        const monster4 = new Image();

        monster1.src = "/docs/assets/Images/MonsterOne/monster1-1.png";
        monster2.src = "/docs/assets/Images/MonsterOne/monster1-2.png";
        monster3.src = "/docs/assets/Images/MonsterOne/monster1-3.png";
        monster4.src = "/docs/assets/Images/MonsterOne/monster1-4.png";

        this.monsterWalk = [monster1, monster2, monster3, monster4];
    }

    start(){
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.draw();
    }

    draw(){
      /*   if(this.frames % 120 === 0) {
            this.animation = (this.animation + 1) % this.monsterWalk.length
        }  */

        ctx.drawImage(this.monsterWalk[this.animation], this.x, this.y, this.w, this.h);
    }

    levelOne(){
        this.health = this.health;
        this.strength = this.strength;
    }
    
    levelTwo(){
        this.health = this.health * 1.5;
        this.strength = this.strength * 1.5;
    }
    
    levelThree(){
        this.health = this.health * 2;
        this.strength = this.strength * 2;
    }
    
    levelFour(){
        this.health = this.health * 2.7;
        this.strength = this.strength * 2.7;
    }
    
    boss(){
        this.health = this.health * 4;
        this.strength = this.strength * 4;
    }
}