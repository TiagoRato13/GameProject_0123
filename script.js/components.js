/** @type {HTMLCanvasElement} */

class Component{
    constructor(x, y, w, h,health, strength, image, ctx) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.health = health;
        this.strength = strength;
        this.moveX = 0;

        this.image = image;
        this.ctx = ctx;
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
        return this.x + this.w;
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

class Hero extends Component{
    constructor(x, y, w, h, health, strength, image, ctx){
        super(x, y, w, h, health, strength, image, ctx)
    }

    draw(){
        this.ctx.fillRect(this.x + 20, this.y - 100, 100, 200)
    }

    moveRight(){
        this.x += this.moveX;
    }
}

class Enemies extends Component{
    constructor(x, y, w, h,health, strength, color, ctx){
        super(x, y, w, h,health, strength, color, ctx)
    }

    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.w, this.h);
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