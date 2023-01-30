/** @type {HTMLCanvasElement} */

class Component{
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.moveX = 0;
    }

    top() {
        return this.y;
    }

    bottom() {
        return this.y + this.h
    }

    left() {
        return this.x;
    }

    right() {
        return this.x + (this.w -20);
    }

    crashWith(enemy){
        return !(
            this.bottom() < enemy.top() ||
            this.top() > enemy.bottom() ||
            this.right() < enemy.left() ||
            this.left() > enemy.right()
        )
    }
} 

class Enemies extends Component{
    constructor(x, y, w, h){
        super(x, y, w, h)
        /* this.color = 'red' */

        const monsterOne = new Image();
        monsterOne.src = "/docs/assets/Images/MonsterOne/monster1-1.png";

        this.image = monsterOne;
    }

    draw() {
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        /* ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h); */
    }

    levelOne(){
        this.health = this.health;
        this.strength = this.strength;
        /* this.image = new Image ();
        this.image.src = '/docs/assets/Images/New Piskel (11).png'; */
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