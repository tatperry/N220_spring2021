// Tatiana Perry
// NEWM-N220
// LAB 3
// LOOPS EXERCISES
// FEBRUARY 11, 2021

// Set up CANVAS

function setup() {
    createCanvas(800, 600);
    background("black");
  
    // Nesting loops
  
    for (var i = 1; i < 5; i++) {
      for (var x = 5; i < x; x--) {
        fill("red");
        square(i * 53, x * 53, 50);
  
        //   (x,y,w,h)
      }
    }
  }