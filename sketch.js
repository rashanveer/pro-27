
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bob1,bob2,bob3,bob4,bob5;
var Rope1,Rope2,Rope3,Rope4,Rope5,roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  bobDiameter = 40

  roof = new Roof(300,300,300,20)
  bob1 = new Bob(200,500,50)
	bob2 = new Bob(250,500,50)
	bob3 = new Bob(300,500,50) 
	bob4 = new Bob(350,500,50)
	bob5 = new Bob(400,500,50)
	Rope1 = new rope(bob1.body,roof.body,-bobDiameter*2.5,0)
  Rope2 = new rope(bob2.body,roof.body,-bobDiameter*1.25,0)
  Rope3 = new rope(bob3.body,roof.body,-bobDiameter*0,0)
  Rope4 = new rope(bob4.body,roof.body,bobDiameter*1.25,0)
  Rope5 = new rope(bob5.body,roof.body,bobDiameter*2.5,0)
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("lightgreen");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  roof.display();
  drawSprites();
 
}
function keyPressed(){
 if(keyCode===UP_ARROW){
  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:45,y:45})

 }


}


