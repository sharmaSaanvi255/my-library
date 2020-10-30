var fixedRect, movingRect;
var fr1,mr1;
var fr2,mr2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  fr1=createSprite(100,300,50,30);
  fr1.shapeColor="blue";
  fr1.velocityY=3;

  mr1=createSprite(100,500,60,40);
  mr1.shapeColor="blue";
  mr1.velocityY=-2;

  fr2=createSprite(500,100,50,50);
  fr2.shapeColor="red";
  fr2.velocityX=-2;

  mr2=createSprite(400,100,50,30);
  mr2.shapeColor="red";
  mr2.velocityX=3;
  
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  bounceOff(mr1,fr1);
  bounceOff(mr2,fr2);
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

