
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2,bob3,bob4,bob5,bob6;
var roof1;
var rope1,rope2,rope3,rope4,rope5,rope6;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	
	bob1 = new Ball(260,400);
	bob2 = new Ball(320,400);
	bob3 = new Ball(380,400);
	bob4 = new Ball(440,400);
	bob5 = new Ball(500,400);
	bob6 = new Ball(560,400);

	roof1 = new Roof();

	rope1 = new Rope(bob1.body,roof1.body,-180,0);
	rope2 = new Rope(bob2.body,roof1.body,-110,0);
	rope3 = new Rope(bob3.body,roof1.body,-40,0);
	rope4 = new Rope(bob4.body,roof1.body,40,0);
	rope5 = new Rope(bob5.body,roof1.body,110,0);
	rope6 = new Rope(bob6.body,roof1.body,180,0);

	Engine.run(engine);
  
}


function draw() {

  background("aquamarine");
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();

  roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
 
}

function keyPressed(){
	if(keyCode===32){
		Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0});
	}
}


