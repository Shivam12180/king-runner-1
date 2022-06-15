var bg,bgImg;
var king,kingImg;


function preload(){
  bgImg = loadImage("bg.jpg");
  kingImg = loadAnimation("k1.png","k2.png","k3.png","k4.png","k5.png","k6.png");
}

function setup(){
  createCanvas (1200,600);

  bg = createSprite(width/2,height/2,width,height);
  bg.addImage("bgImg",bgImg);
  bg.scale = 0.85;
  bg.velocityX = -2;

  king = createSprite(150,height-100,100,200);
  king.scale = 0.65;
  king.addAnimation("kingImg",kingImg);
}

function draw(){
background (0);

if(bg.x <700){
  bg.x = bg.width/2;
}
drawSprites();
}