var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
createCanvas(800,700)

	ground = createSprite(height/2,700,800,10);

	dustbin1 = new Dustbin(400,670,200,20);
	
	dustbin2 = new Dustbin(310,610,20,100);

	dustbin3 = new Dustbin(490,610,20,100);
	
	ball = new PaperBall(200,670,10);

	engine = Engine.create();
	world = engine.world;

	
	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  drawSprites();
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  ball.display()
}	  
function keyPressed()
{
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



