
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground ;
var paper ;
var dustbin1, dustbin2, dustbin3 ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 680, 800, 10);

	paper = new Paper(200, 100, 70);

	dustbin1 = new Dustbin(600, 660, 20, 200);
	dustbin2 = new Dustbin(500, 660, 100, 20);
	dustbin3 = new Dustbin(700, 660, 100, 20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:85,y:85});

	}
}


