const Engine = Matter.Engine;
const World  = Matter.World;
const Bodies = Matter.Bodies;

var bg, ground;
var engine,world;
var snow;
var ice = []
var maxSnow = 100;

function preload(){
  bg  = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1300,600);
  engine = Engine.create();
  world  = engine.World;
  if(frameCount%150 === 0){
    for(var i = 0; i < maxSnow; i++){
      ice.push(new Snow(random(0,1400), random(0,50)));
    }
  }
  
}

function draw() {
  background(bg); 
  Engine.update(engine);
  for( var i = 0; i < maxSnow; i++){
    ice[i].display();
    ice[i].changePosition();
  }
  drawSprites();
}