class Paper{
    constructor(x,y,r){
        var options = {
            isStatic:false,
            resistution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x
        this.y = y
        this.r = r
        this.body = Bodies.circle(this.x,this.y,(this.r-20)/2,options)
        this.image = loadImage("paper.png")
        World.add(world,this.body)
    }
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        imageMode(CENTER)
        strokeWeight(3)
        //stroke("red")
        image(this.image,0,0,this.r,this.r)
        pop()
    }
}