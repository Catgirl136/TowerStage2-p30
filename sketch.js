const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var stand1,stand2
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,
block18,block19,block20,block21,block22,block23,block24,block25,block26,block27,block28,block29,block30,block31,block32,block33,block34
var ground
var slingshot
var ball
function setup() {
  createCanvas(1000,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  ball= Bodies.circle(50,200,20)
  World.add(world,ball)
  slingshot= new Slingshot(this.ball,{x:100,y:200})
  ground= new Ground()  
  stand1= new Stand(400,300,250,10)
  stand2= new Stand(700,200,200,10)
  block1= new Block(300,275,30,40)
  block2= new Block(330,275,30,40)
  block3= new Block(360,275,30,40)
  block4= new Block(390,275,30,40)
  block5= new Block(420,275,30,40)
  block6= new Block(450,275,30,40)
  block7= new Block(480,275,30,40)

  block8= new Block(330,235,30,40)
  block9= new Block(360,235,30,40)
  block11= new Block(390,235,30,40)
  block12= new Block(420,235,30,40)
  block13= new Block(450,235,30,40)

  block14= new Block(360,195,30,40)
  block15= new Block(390,195,30,40)
  block16= new Block(420,195,30,40)
  block17= new Block(390,155,30,40)

  block18= new Block(640,175,30,40)
  block19= new Block(670,175,30,40)
  block20= new Block(700,175,30,40)
  block21= new Block(730,175,30,40)
  block22= new Block(760,175,30,40)
  block23= new Block(700,95,30,40)
  block24= new Block(730,95,30,40)
 
}
function draw() {
  background("purple"); 
  textSize(20)
  fill("blue")
  text("drag the polagon to destroy the blocks",300,30)
  text("press space to get a second chance",600,300)
  drawSprites();
  ground.display()
  stand1.display()
  stand2.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  block16.display()
  block17.display()
block18.display()
block19.display()
block20.display()
block21.display()
block22.display()
block23.display()
block24.display()


  slingshot.display()
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x: mouseX, y: mouseY})
}
function mouseReleased(){
slingshot.fly()    
}
function KeyPressed(){
if(keyCode===32){
 slingshot.attach(this.ball)
}
}