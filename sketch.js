const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ground,box	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	ball=new Paper(200,460,70);
	ground=new Ground(width/2,470,width,20);
    box=new Box(800,300);
    box1= new Box(680,300,20,200)
    box2=new Box(920,300,20,200)
	
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(230);
  ball.display();
  ground.display();
  box.display();
  box1.display()
  box2.display()
  


}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-170});

    
  	}
}
