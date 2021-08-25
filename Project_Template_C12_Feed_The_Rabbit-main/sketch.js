var garden,rabbit;
var gardenImg,rabbitImg;
var apple;
var apple_img;
var leaves;
var leaves_img;
var select_sprite;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_img = loadImage("apple.png");
  leaves_img = loadImage("orangeLeaf.png")
} 

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit 
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x=mouseX
  
  rng();
 
  
  drawSprites();
  fill("black")
  text(mouseX+","+mouseY,mouseX,mouseY)
  
}
function rng()
{

if(frameCount%80==0)
{
  select_sprite = Math.round(random(1,2));
if (select_sprite==1)
{
createApples();
}
else
{
createLeaves();
}
}
}
function createApples()
{
  apple=createSprite(random(50,350),40)
  apple.addImage("apple",apple_img)
  apple.lifetime=80
  apple.scale=0.09
  apple.velocityY=5
}
function createLeaves()
{
leaves=createSprite(random(50,350),40)
leaves.addImage("leaves",leaves_img)
leaves.lifetime=80
leaves.scale=0.09
leaves.velocityY=5
}
