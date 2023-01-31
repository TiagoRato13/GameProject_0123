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
        /* monster5.src = "/docs/assets/Images/MonsterOne/monster1-1.png";
        monster6.src = "/docs/assets/Images/MonsterOne/monster1-2.png";
        monster7.src = "/docs/assets/Images/MonsterOne/monster1-4.png"; */
        this.animation = monster1;
        this.monsterWalk = [monster1,monster2, monster4];
    }

    /* start(){
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
       this.frames++; 
       console.log(this.frames)
    } */

    draw(){
        this.frames++;
        console.log(this.frames);
            this.animation = this.monsterWalk[Math.floor(this.frames % 45 / 15)]
        /* }   */
        ctx.drawImage(this.animation, this.x, this.y, this.w, this.h);
        /* if (game.frames % 15 === 1){
            ctx.drawImage(this.monsterWalk[0], this.x, this.y, this.w, this.h); 
        } else if (game.frames % 10 === 0){
            ctx.drawImage(this.monsterWalk[1], this.x, this.y, this.w, this.h); 
        } else {
            ctx.drawImage(this.monsterWalk[0], this.x, this.y, this.w, this.h); 
        } */
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