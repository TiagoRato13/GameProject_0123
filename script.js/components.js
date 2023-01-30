/** @type {HTMLCanvasElement} */

class Component{
    constructor(x, y, w, h, health, strength) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.health = health;
        this.strength = strength;
        this.intervalId = null;
        this.frames = 0;
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
        return this.x + (this.w - 20);
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