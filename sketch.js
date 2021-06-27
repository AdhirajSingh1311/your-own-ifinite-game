var bg,bgImg;
var zombie,zombieImg;
var girl,girlImg;
var stone,stoneImg;
var stoneGroup;
var  gameOver,gameOverImg;
var PLAY=1;
var END=0;
var gameState=PLAY;
    


function preload(){
  
zombieImg= loadImage ("zombie.png");
bgImg= loadImage ("bg.png");
girlImg= loadImage("girl.png");
stoneImg=loadImage("stone.png");
gameOverImg=loadImage("gameOver.png");
}

function setup() {
  
  createCanvas (600,600)
  
  bg=createSprite(300,300,600,600);
  bg.addImage(bgImg);
  bg.scale=2
  bg.velocityX=-3;
  
  girl=createSprite(350,550,20,20);
  girl.addImage(girlImg);
  girl.scale=0.4;
  girl.debug=false;
  
  zombie=createSprite(100,550,20,20);
  zombie.addImage(zombieImg);
  zombie.scale=0.6;
  
  gameOver=createSprite(300,300,20,20);
  gameOver.addImage(gameOverImg);
  
  
  
  stoneGroup=new Group();
  
 
}

function draw() {
  background(0)
  
 if(gameState===PLAY){
   gameOver.visible=false;
  
  if (stoneGroup.isTouching(girl)){
  gameState=END;
  
    
  }
   if(stoneGroup.isTouching(zombie)){
     
     zombie.velocityY=-15
     
   }
   zombie.velocityY=zombie.velocityY+3
  
  if(bg.x<200){
    bg.x=300
  }
  if(keyDown("space")){
    girl.velocityY=-20;
  }
  girl.velocityY = girl.velocityY+0.8;
  edges=createEdgeSprites();
  girl.collide(edges[3]);
   zombie.collide(edges[3]);
  
  

  
  
  spawnStones();
 }
  
  else if(gameState===END){
    
    bg.velocity=0;
    girl.velocity=0
    zombie.velocity=0;
    gameOver.visible=true;
    
    
  }
  drawSprites();
   
}

function spawnStones (){
  
  if(frameCount%150===0) {
  stone=createSprite(600,570,20,20);
  stone.addImage(stoneImg);
  stone.scale=0.15;
  stone.debug=false;
  stone.velocityX=-3;
  stoneGroup.add(stone);
  } 
}







