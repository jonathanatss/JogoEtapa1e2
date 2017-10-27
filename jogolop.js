var x = 100;
var y = 100;
var posX = 0;
var posY = 150;
var contador_batida = 0;

function setup() {
  createCanvas(640, 512);
  pg = createGraphics(900,100)
}

function draw() {
  background(20, 50, 0);
  
  rect(x, y, 50, 50,30,40);
  rect(posX, posY, 50, 50);
  
  if (keyIsDown(LEFT_ARROW))
    x-=5;

  if (keyIsDown(RIGHT_ARROW))
    x+=5;

  if (keyIsDown(UP_ARROW))
    y-=5;

  if (keyIsDown(DOWN_ARROW))
    y+=5;
	
 
 }
