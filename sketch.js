var monkey , monkey_running,ground;
var banana ,bananaImage, obstacle,            obstacleImage;
var FoodGroup, obstacleGroup;
var score=0;
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  
}



function setup() {
  createCanvas(400,500);

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  score=0;
  
  FoodGroup= new Group();
  obstacle= new Group();
  
}


function draw() {
  background("lightgreen");
  
  if (ground.x<0){
    ground.x=400;
  }
  
  if (keyDown("space")){
    monkey.velocityY=-12; 
  }
  monkey.velocityY=monkey.velocityY+0.8;
  monkey.collide(ground);
  
  if(monkey.isTouching(FoodGroup)){
    FoodGroup.destroyEach();
    score=score+2;
  }
  
  
  
  
   Food();
  obstacles();
  
   drawSprites();
  stroke("white");
  textSize(30);
  fill("white");
  text("Score:"+score,250,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survivalTime:"+survivalTime,50,50);
  
  
}

function Food(){
  if (World.frameCount % 80===0){
  banana=createSprite(200,200,20,20);
  banana.addImage(bananaImage);
  banana.y=Math.round(random(100,120));
  banana.scale=0.1;
  banana.velocityX=-4;
  banana.setLifetime=50;  
    
  FoodGroup.add(banana);
  
  }
 
 }

function obstacles(){
  if (World.frameCount% 150===0){
    obstacle=createSprite(400,338,20,20);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX=-4;
  obstacle.scale=0.1;
    }
  
}



