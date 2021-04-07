var fairy, star, fairyImg, starImg;
var bgImg;
var starbody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
   //preload the images here
   fairyImg=loadImage("images/fairy.png");
   starImg= loadImage("images/star.png");
   bgImg= loadImage("images/starnight.png");


}

function setup() {
  createCanvas(800, 750);
  fairy= createSprite(200,600,50,50);
  fairy.addImage(fairyImg);
  fairy.scale=0.2;
  star= createSprite(700,100,50,50);
  star.addImage(starImg);
  star.scale=0.4;
  engine=Engine.create();
  world=engine.world;
  
  starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  Engine.update(engine)

  background(bgImg);
  fairy.velocityX=0
  fairy.velocityY=0
 
  if(keyDown(RIGHT_ARROW)){
	fairy.velocityX=6
}else if (keyDown(LEFT_ARROW)){
	fairy.velocityX=-6
}else if (keyDown(DOWN_ARROW)){
	star.velocityY=4
}

if(star.y>470){
	star.velocityY=0
}

  drawSprites();


}