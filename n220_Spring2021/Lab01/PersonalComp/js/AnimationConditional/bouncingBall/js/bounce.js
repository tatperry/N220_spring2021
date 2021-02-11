// Tatiana Perry
// N220
// Lab 2 - Ball Wrap/Bounce
// February 3, 2021

var ball = {
  x: 300,
  y: 200,
  xspeed: 5,
  yspeed: 5,
};
//   creating a canvas
function setup() {
  createCanvas(800, 600);
}

function draw() {
  background("white");
  stroke("green");
  strokeWeight(4);
  fill("green");
  ellipse(ball.x, ball.y, 100, 100);

  if (ball.x > width || ball.x < 10) {
    ball.xspeed = ball.xspeed * -1;
  }
  if (ball.y > height || ball.y < 0) {
    ball.yspeed = ball.yspeed * -1;
  }

  ball.x = ball.x + ball.xspeed;
  ball.y = ball.y + ball.yspeed;
}

