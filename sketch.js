
var trex ,trex_running;
var edges;
var ground;
var groundimage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundimage = loadImage("ground2.png");
}
function setup(){
  createCanvas(600,200)

 trex = createSprite(60,160,20,50);

 trex.addAnimation("running",trex_running);
 trex.scale=0.6;
 edges = createEdgeSprites();
 ground = createSprite(300,180,600,5);
 ground.addImage("ground",groundimage);
 ground.x = ground.width/2
 ground.velocityX = -10;
}

function draw(){
  background("blue")
  drawSprites();
  if(ground.x<0){
    ground.x = ground.width/2
  }
  console.log(ground.x);
  if(keyDown("space")){
    trex.velocityY = -10
  }
  trex.velocityY = trex.velocityY+0.5
  trex.collide(ground);
  //trex.collide(edges[2]);
  
}
