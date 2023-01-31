class Mage extends Component{
    constructor(x, y, w, h){
        super(x, y, w, h)
        this.health = 10;
        this.strength = 5;
        this.intervalId = null;
        this.frames = 0;
        this.animation = 0;
        this.idle = true;
        this.death = false;
        
        //IDLE
        const idle1 = new Image();
        const idle2 = new Image();
        const idle3 = new Image();
        const idle4 = new Image();
        const idle5 = new Image();
        const idle6 = new Image();
        const idle7 = new Image();

        idle1.src = "/docs/assets/Images/Lightning Mage/idle/Idle1.png";
        idle2.src = "/docs/assets/Images/Lightning Mage/idle/Idle2.png";
        idle3.src = "/docs/assets/Images/Lightning Mage/idle/Idle3.png";
        idle4.src = "/docs/assets/Images/Lightning Mage/idle/Idle4.png";
        idle5.src = "/docs/assets/Images/Lightning Mage/idle/Idle5.png";
        idle6.src = "/docs/assets/Images/Lightning Mage/idle/Idle6.png";
        idle7.src = "/docs/assets/Images/Lightning Mage/idle/Idle7.png";


        //RUN
         const run1 = new Image();
         const run2 = new Image();
         const run3 = new Image();
         const run4 = new Image();
         const run5 = new Image();
         const run6 = new Image();
         const run7 = new Image();
         const run8 = new Image();

        run1.src = "./docs/assets/Images/Lightning Mage/run/Run1.png";
        run2.src = "./docs/assets/Images/Lightning Mage/run/Run2.png";
        run3.src = "./docs/assets/Images/Lightning Mage/run/Run3.png";
        run4.src = "./docs/assets/Images/Lightning Mage/run/Run4.png";
        run5.src = "./docs/assets/Images/Lightning Mage/run/Run5.png";
        run6.src = "./docs/assets/Images/Lightning Mage/run/Run6.png";
        run7.src = "./docs/assets/Images/Lightning Mage/run/Run7.png";
        run8.src = "./docs/assets/Images/Lightning Mage/run/Run8.png";

        //DEATH
        const death1 = new Image();
        const death2 = new Image();
        const death3 = new Image();
        const death4 = new Image();
        const death5 = new Image();
        const death6 = new Image();

        death1.src = "/docs/assets/Images/Lightning Mage/death/death1.png";
        death2.src = "/docs/assets/Images/Lightning Mage/death/death2.png";
        death3.src = "/docs/assets/Images/Lightning Mage/death/death3.png";
        death4.src = "/docs/assets/Images/Lightning Mage/death/death4.png";
        death5.src = "/docs/assets/Images/Lightning Mage/death/death5.png";
        death6.src = "/docs/assets/Images/Lightning Mage/death/death6.png";

        this.image = idle1;
        this.mageRun = [run1, run2, run3, run4, run5, run6, run7, run8];
        this.mageIdle = [idle1, idle2, idle3, idle4, idle5, idle6, idle7];
        this.mageDeath = [death1, death2, death3, death4, death5, death6];
    }

    start(){
        this.intervalId = setInterval(this.update, 1000 / 60);
    }

    update = () => {
        this.frames++;
        this.draw();
    }

    draw(){
        if(this.idle) {
            if(this.frames % 12 === 0) {
                this.animation = (this.animation + 1) % this.mageIdle.length
            } 
    
            ctx.drawImage(this.mageIdle[this.animation], this.x, this.y, this.w, this.h);
        }
    }

    attack = () => {
              
        for(arr in enemies) {             
            let e = enemies[arr];                         
            if(e != null) {	                 
                let a = e.x - this.x;                 
                let b = e.y - this.y                 
                if(Math.hypot(a,b) < e.size) {                     
                    enemies[arr] = null;                     
                    return true;                 
                }             
            }         
        }         
        return false;     
    }


     death(){
        this.death = true;
        if(this.death) {
            if(this.frames % 12 === 0) {
                this.animation = (this.animation + 1) % this.mageDeath.length
            } 
    
            ctx.drawImage(this.mageDeath[this.animation], this.x, this.y, this.w, this.h);
        }
    } 

    moveRight(){
        this.x += this.moveX;
    }
}
