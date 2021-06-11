
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;


var engine, backgroundImg,box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box19,base1,ground,ground1,ground2,ball1; 
function preload() {
  backgroundImg = loadImage("bg9.jpg");
}
function setup() {
    createCanvas(900, 680);
    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
   
    ground = new Ground(400,677,1000,15);
    ground1 = new Ground(530,360,210,10);
    ground2 = new Ground(255,250,210,10);
      
    box1=new Box(540,260,30,40);
    box2=new Box(540,340,30,40);
    box3=new Box(480,340,30,40);
    box4=new Box(510,340,30,40);
    box5=new Box(570,340,30,40);
    box6=new Box(600,340,30,40);
    box7=new Box(250,150,30,40);
    box8=new Box(250,190,30,40);
    box9=new Box(280,190,30,40);
    box10=new Box(220,190,30,40);
    box11=new Box(220,230,30,40);
    box12=new Box(250,230,30,40);
    box13=new Box(280,230,30,40);
    box14=new Box(510,300,30,40);
    box15=new Box(540,300,30,40);
    box16=new Box(570,300,30,40);
    box17=new Box(310,230,30,40);
    box18=new Box(190,230,30,40);
    ball1 =new Hitter(760,70,20);

    slingshot=new SlingShot(ball1.body,{x:550,y:50});

   

    Engine.run(engine);
  
}

function draw() {
  
  rectMode(CENTER);
  
  background(backgroundImg);
  textSize(38)
  fill("black")
  text("Drag the ball and Hit the blocks!!",330,630)
  fill("yellow")
  text("TOWER SIEGE",40,50)
  //Engine.update(engine);
    
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  ground.display();
  ground1.display();
  ground2.display();
 ball1.display();

slingshot.display();

  
}

function mouseDragged(){

  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY}) 
    }
  
   
  
  
    function mouseReleased(){
  
     slingshot.fly()
      
      }








