const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,ground,world,ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

  ground_options={
    isStatic:true
  }

  ground=Bodies.rectangle(400,390,800,20,ground_options);
  World.add(world,ground);

  ball_options={
    restitution:1
  }

  ball=Bodies.circle(400,100,20,ball_options);
  World.add(world,ball);
  

  console.log(ball);
  console.log(ball.type);
  console.log(ball.position.x);
  console.log(ball.position.y);

}

function draw() {
  background("pink");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}