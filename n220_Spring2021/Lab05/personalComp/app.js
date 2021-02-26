let x = 1;
let y = 1;
let easing = 0.15;

function setup() {
  createCanvas(1900, 900);
  
}

function draw() {
  background(1111111);
  let targetX = mouseY;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseX;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, 66, 66);
  fill(0);

  
  

}