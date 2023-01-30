class Mage extends Component{
    constructor(x, y, w, h){
        super(x, y, w, h)
        this.health = 10;
        this.strength = 5;

         const run1 = new Image();
         const run2 = new Image();
         const run3 = new Image();
         const run4 = new Image();
         const run5 = new Image();
         const run6 = new Image();
         const run7 = new Image();
         const run8 = new Image();

        //2-
        /* run1.addEventListener("load", () => {}) */
        run1.src = "./docs/assets/Images/Lightning Mage/run/Run1.png";
        run2.src = "./docs/assets/Images/Lightning Mage/run/Run2.png";
        run3.src = "./docs/assets/Images/Lightning Mage/run/Run3.png";
        run4.src = "./docs/assets/Images/Lightning Mage/run/Run4.png";
        run5.src = "./docs/assets/Images/Lightning Mage/run/Run5.png";
        run6.src = "./docs/assets/Images/Lightning Mage/run/Run6.png";
        run7.src = "./docs/assets/Images/Lightning Mage/run/Run7.png";
        run8.src = "./docs/assets/Images/Lightning Mage/run/Run8.png";

        this.image = run3
        this.mageRun = [run1, run2, run3, run4, run5, run6, run7, run8];

    }

    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
        /* this.ctx.drawImage() */
    }

    moveRight(){
        this.x += this.moveX;
    }
}
