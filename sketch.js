var r = 0;
var g = 50;
var b = 255;

var ball = newBall(600,200,40,40);

function setup(){

  createCanvas(1200,400);
}


function draw(){

 background("aqua");
ball.display();
 drawSprites();
}