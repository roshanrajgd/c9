var ball,ballimage ;


function preload(){
ballimage = loadImage("ballimage.jpg")
}
function setup() {
  createCanvas(1350,700);
  
  ball = createSprite(755,350)
  ball.shapeColor = "black";
  ball.addImage("ballpng",ballimage)
}

function draw() 
{
  background("blue");

  if (keyDown("up")){
    ball.y = ball.y -4
  }
  drawSprites ();
}




