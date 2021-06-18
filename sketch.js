

var backgroundImg;
var astronaut;
var alien1, alien2, alien3;
var spawnAliens;

function preload(){
  backgroundImg = loadImage("Pictures/Galaxy bg.jpg")
  astronautI = loadImage("Pictures/Astronaut.png")
  alien3 = loadImage("Pictures/Alien 1.png")
  alien4 = loadImage("Pictures/Alien 2.png")
  alien1 = loadImage("Pictures/Alien 3.png")
}

function setup() {
  createCanvas(1000,600);
  astronaut = createSprite(200,500,50,50)
  astronaut.addImage("astronaut",astronautI)
  astronaut.scale = 0.4

 
 
}

function draw() {
  background(backgroundImg);  
  if(keyDown(LEFT_ARROW)){
   astronaut.velocity.x = astronaut.velocity.x - 0.5;
  }
  if(keyDown(RIGHT_ARROW)){
    astronaut.velocity.x = astronaut.velocity.x + 0.5;
  }
  if(keyDown(UP_ARROW)){
    astronaut.velocity.y = astronaut.velocity.y - 0.5;
  }
  if(keyDown(DOWN_ARROW)){
    astronaut.velocity.y = astronaut.velocity.y + 0.5;
  }
  
  drawSprites();
}
