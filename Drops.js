class Drop extends Base{
    constructor(x,y,width,height){
        super(x,y,width,height);
    }
    fall(speed){
        this.y +=speed;
    }
}
