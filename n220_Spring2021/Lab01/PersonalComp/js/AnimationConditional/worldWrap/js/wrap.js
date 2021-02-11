//
// Tatiana Perry
// N220 - 28238
// Lab 2
// September 3, 2020
//
var circleX = 0;
var speed = 5;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(250, 250, 100);
  fill(250, 0, 0);
  ellipse(circleX, 200, 80, 90);
  circleX = circleX + 5, -5;
  
}
