
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var circle;
var constraintlog;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	circle = new Circle2(200,200,20);

	constraintlog = new Circle(200,200,120, PI/2);
	chain = new Circle(bird.body,constraintLog.body);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  circle.display();
  drawSprites();
  constraintlog.display();
 
}



