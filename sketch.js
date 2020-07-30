var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

    engine = Engine.create(350,150,1000,20);
	  world = engine.world;
    var bobDiameter = 140;

    roof = new Roof(570,200,850,40);
    ground = new Roof(570,600,850,40);

    //  bobObject1 = new Bob(280,500);
    //  bobObject2 = new Bob(420,500);
    //  bobObject3 = new Bob(560,500);
    //  bobObject4 = new Bob(700,500);
    //  bobObject5 = new Bob(840,500);

     bobObject1 = new Bob(180,500);
      bobObject2 = new Bob(360,500);
      bobObject3 = new Bob(540,500);
      bobObject4 = new Bob(720,500);
      bobObject5 = new Bob(900,500);

     //rope1 = new Rope(bobObject1.body,roof.body,bobDiameter*2, 0);
     rope1 = new Rope(bobObject1.body,roof.body,100, 10);
    rope2 = new Rope(bobObject2.body,roof.body,100, 10);
    rope3 = new Rope(bobObject3.body,roof.body,100,10);
    rope4 = new Rope(bobObject4.body,roof.body, 100,10);
    rope5 = new Rope(bobObject5.body,roof.body,100,10);
  
  
   	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(225);
  roof.display();
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}
function drawLine(constraint) { 
    console.log("Inside Drawline")
		bobPos = constraint.bodyA.position 
		roofPos = constraint.bodyB.position 
		roofBodyOffset = constraint.pointB; 
		roofBodyX = roofBodyPosition.x + roofBodyOffset.x 
		roofBodyY = roofBodyPosition.y + roofBodyOffset.y 
		line(bobBodyPos.x, bobBodyPos.y, roofBodyX, roofBodyY); 
	}
function keyPressed() { 
	if (keyCode === UP_ARROW){ 
   
   Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-200,y:-100});
  
   } 
} 


