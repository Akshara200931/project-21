
var car,wall,thickness;
var speed;
var weight;

function setup() {
  createCanvas(800,400);

  thickness=random(20,80);
  speed = random(10,40);
  weight = random(1000,3000);

  wall = createSprite(750, 200, 25, 800);
 
  car = createSprite(50, 200, 25, 25);
  car.velocityX = speed;
  car.shapeColor="pink"
  wall.shapeColor="blue"
}

function draw() {
  background(0,0,0); 
  
  var deformation=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  
  

  if(car.collide(wall)){
    if(deformation>10)
    {
  
           wall.shapeColor=color("red");
    }
  
    if(deformation<10)
    {
        wall.shapeColor=color("green");
    }
  

  }
  drawSprites();
}

function collide(b,w)
{
    bulletRightEdge=b.x +b;
    wallLeftEdge=w.x;
    if(bulletRightEdge>=wallLeftEdge){
    return true;
    }
    return false;
  }