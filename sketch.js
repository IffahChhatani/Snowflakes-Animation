var bg;
var flake1, flake2;
var world, engine;
function preload() {
  bg = loadImage("snow1.jpg");
}

function setup() {
  createCanvas(800, 400);
  engine = Matter.Engine.create();
  world = engine.world
  flake1 = new SnowFlakes(200, 50, 60, 60,"snow5.png");
  flake2 = new SnowFlakes(300, -50, 100, 100,"snow4.png");
}

function draw() {
  background(bg);
  Matter.Engine.update(engine);
  flake1.display();
  flake2.display();
}