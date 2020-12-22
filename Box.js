class Box{

    constructor(x,y,width,height){

        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);

        this.image = loadImage("dustbingreen.png");

        World.add(world,this.body);
    }

    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
    }  
}