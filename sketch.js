
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint ;
function preload()
{
	boy = loadImage("images/boy.png")
}

function setup() {
  createCanvas(1200, 700);


  engine = Engine.create();
  world = engine.world;
  stone = new Stone(100, 600, 10)
  mango1 = new Mango(800, 100, 10);
  mango2 = new Mango(600, 150, 10);
  mango3 = new Mango(700, 170, 10);
  mango4 = new Mango(900, 190, 10);
  mango5 = new Mango(600, 210, 10);

  ground = new Ground(600, height, 1200, 20);
  tree = new Tree(800, 680, 10, 10)
  sling = new Slingshot(stone.body, {x: 100,y:500})

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boy, 100,450,200,300)
  ground.display()
  tree.display();
  stone.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display()
  mango5.display()
  sling.display()
  drawSprites();


  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
}

function mouseDragged(){
 Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
}

function mouseReleased(){
  sling.fly()
}
function detectCollision(lstone,lmango){
mangoBodyPosition=lmango.body.position 
stoneBodyPosition=lstone.body.position 

var distance=dist(mangoBodyPosition.x,mangoBodyPosition.y,stoneBodyPosition.x,stoneBodyPosition.y)
if(distance<= lmango.r+lstone.r){
	Matter.Body.setStatic(lmango.body,false);
}
}
