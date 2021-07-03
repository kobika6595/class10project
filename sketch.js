var ship, ship_running, edges;
var seaImage;
var sea;
function preload(){
  seaImage=loadImage("sea.png");
  ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
}
 function setup(){
   createCanvas(400,400);
   sea=createSprite(200,88,800,10)
   sea.addImage(seaImage)
   sea.scale=0.4;
   sea.velocityX=-7;
     
   ship=createSprite(200,80,25,1)
   ship.addAnimation("running",ship_running)
   ship.scale=0.2;
   

 }
  function draw(){
    background("blue");
    if(sea.x<0){
      sea.x=sea.width/8
    } 
    drawSprites()
  }
