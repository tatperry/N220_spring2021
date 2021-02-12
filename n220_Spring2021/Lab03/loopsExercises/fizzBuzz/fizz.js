// Tatiana Perry
// NEWM-N220
// LAB 3
// LOOPS EXERCISES
// FEBRUARY 11, 2021

// variable 1-100 of numbers 
// MAKE A CANVAS AND SET A BACKGROUND COLOR
function setup() {
  createCanvas(900, 100);
  background(900);
}
// FIZZ BUZZ/ MAKINGING CIRCLES AND SQUARES
function draw() {
  // IF STATEMENT

  for (var i = 1; i < 26; i++) {

    // if the items are divisible by 5 and 3 make them a BLUE RECTANGLES
    if (i % 3 == 0 && i % 5 == 0) {
      fill("blue");
      rect(i * 30, 15, 10, 10);
      // (x,y,width,height);
    }

    // if the items are divisible by 5 make the GREEN RECTANGLES
    else if (i % 5 == 0) {
      fill("green");
      rect(i * 30, 15, 10, 10);

      // (x,y,width,height);
    }

    // if the items are divisible by 3 make them PURPLE CIRCLES
    else if (i % 3 == 0) {
      fill("purple");
      circle(i * 30, 20, 10);
    }

    // All the rest should be black
    else {
      fill("black");
      circle(i * 30, 20, 10);
    }
  }
}
