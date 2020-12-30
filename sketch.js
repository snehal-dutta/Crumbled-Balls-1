const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper,ground,side1,side2,side3;

function setup() {
  createCanvas(800, 700);
 
 
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 680, 800, 20);

  paper = new Paper(100, 600, 10);

  side1 = new Dustbin(550, 620, 20, 100);
  side2 = new Dustbin(635, 660, 150, 20);
  side3 = new Dustbin(720, 620, 20, 100);


    Engine.run(engine);
 
}


function draw() {

 background("grey");

 Engine.update(engine);

 ground.display();

 paper.display();

 side1.display();
 side2.display();
 side3.display();

}

function keyPressed() {
 if(keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y: -15})
 }

 }
