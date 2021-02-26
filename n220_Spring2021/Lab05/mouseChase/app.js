let x = 1;
let y = 1;
let easing = 0.03;

function setup() {
  createCanvas(800, 800);
  
}

function draw() {
  background(1111111);
  let targetX = mouseX;
  let dx = targetX - x;
  x += dx * easing;

  let targetY = mouseY;
  let dy = targetY - y;
  y += dy * easing;

  ellipse(x, y, 66, 66);
  fill(0);

  

}
