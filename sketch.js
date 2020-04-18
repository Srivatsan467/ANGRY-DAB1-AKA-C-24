const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,300,70,70);
    box2 = new Box(900,300,70,70);
    box3 = new Box(700,210,70,70);
    box4 = new Box(900,210,70,70);
    box5 = new Box(800,120,70,70);

    log1 = new Log(800,265,300,PI/2);
    log2 = new Log(800,175,300,PI/2);
    log3 = new Log(750,120,150,PI/7);
    log4 = new Log(850,120,150,-PI/7);


    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(800,300);
    pig2 = new Pig(800,210);

    Rookie1 = new Rookie(200,200);
}

function draw(){
    background(0);

    Engine.update(engine);

    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    pig1.display();
    log1.display();

    pig2.display();
    log2.display();

    log3.display();
    log4.display();

    Rookie1.display();
}