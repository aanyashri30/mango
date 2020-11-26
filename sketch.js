const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree1;
var mango,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	//tree1 = createSprite(400,350,200,200);
	
//Create the Bodies Here.
	
	tree1 = new ped(600,250,400,400);
	ground = new Ground(400,350,800,10);
	mango = new Mangoes(300,100,100,100);
   
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  tree1.display();
  ground.display();
  mango.display();
 
}



