
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{
	
}

function setup() {
	createCanvas(windowWidth, 700);
	
	var ball_options={
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	groundObj = new Ground(width/2, 670, width, 20);
	leftSide = new groundObj(1100, 600, 20, 120);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Matter.Bodies.circle(30, 30, 40, ball_options)
	World.add(engine.world, ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  fill(150);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width, 20);

  fill(0, 150, 0);
    rect(bucket.position.x, bucket.position.y, 100, 100);

	fill(0);
    ellipse(ball.position.x, ball.position.y, 40);

	Body.applyForce(ball, ball.position, { x: 0, y: 0.1 });

  if (ball.position.y > height - 50 && ball.position.x > bucket.position.x - 50 && ball.position.x < bucket.position.x + 50) {
	fill(255, 0, 0);
	textSize(24);
	textAlign(CENTER, CENTER);
  }

 
}



