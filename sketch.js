const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


function setup(){
    wbEngine = Engine.create()
    wbWorld = wbEngine.world
    createCanvas(3000,800)
    ground = new Ground(width/2, height-50, width, 40);
    ball = Bodies.circle(100, 200, 50);
    World.add(wbWorld, ball);
    console.log(ball)
    box1 = new Box(1500, 680, 100, 100);
    box2 = new Box(1400, 680, 100, 100);
    box3 = new Box(1300, 680, 100, 100);
    box4 = new Box(1200, 680, 100, 100);
    box5 = new Box(1100, 680, 100, 100);
    box6 = new Box(1000, 680, 100, 100);
    box7 = new Box(1050, 580, 100, 100);
    box8 = new Box(1150, 580, 100, 100);
    box9 = new Box(1250, 580, 100, 100);
    box10 = new Box(1350, 580, 100, 100);
    box11 = new Box(1450, 580, 100, 100);
    box12 = new Box(1100, 480, 100, 100);
    box13 = new Box(1200, 480, 100, 100);
    box14 = new Box(1300, 480, 100, 100);
    box15 = new Box(1400, 480, 100, 100);
    box16 = new Box(1150, 380, 100, 100);
    box17 = new Box(1250, 380, 100, 100);
    box18 = new Box(1350, 380, 100, 100);
    box19 = new Box(1200, 280, 100, 100);
    box20 = new Box(1300, 280, 100, 100);
    box21 = new Box(1250, 180, 100, 100);
    
   rope = new Rope(ball.body, {x : 500, y: 50})
}

function draw(){
    Engine.update(wbEngine)
    background("#80d4ff")
    ground.display();
    fill("grey")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 50, 50);
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
    box19.display();
    box20.display();
    box21.display();
    rope.display();   
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body, {x : mouseX, y: mouseY});
}