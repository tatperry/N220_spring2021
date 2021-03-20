
// Tatiana Perry
// NEWM-N220
// MIDTERM - PERRY
// March 19, 2021


// drawing 10 circles on the page 
// setting a let variabe with 10 circles 
let cirlce = [0,0,0,0,0,0,0,0,0];
// giving the circles the colors 
let color = [
    "red",
    "green",
    "blue",
    "yellow",
    "purple",
    "orange",
    "pink",
    "cyan",
    "teal",
    "white"
];

// creating a large canvas so none of the circles go out of the canvas
function setup(){
    createCanvas(1000,1000);
    
}
// function draw setup 
function draw(){
    console.log(cirlce);
    background(10);
    // tracking the mouse on the X axis while all of the circles are lined up on the Y axis
    cirlce.push( mouseX);
    cirlce.shift();
    // tracking speed for the mouse and where the mouse is. 
    let speed = abs(winMouseX - pwinMouseX);
    // mouse function of getting the circles to go down when clicked on 
    if (mouseIsPressed){
        if (mouseButton === DOWN){
            cirlce( circle[i], 1000, 70);
        }
    }
    //  for loop with all of the circles lined up giving that the ones in the center are bigger because they are on the x axis 
    // When moved around the should show the color to them. 
    for(var i=0; i< cirlce.length; i++ ){
        fill(color[i])
        // circles are gien the variables up at the top plus the speed at which they move across the screen. 
        circle(cirlce[i] + speed * 5, 150 + speed * 5, 10);
        circle(cirlce[i] + speed * 5, 200 + speed * 5, 20);
        circle(cirlce[i] + speed * 5, 250 + speed * 5, 30);
        circle(cirlce[i] + speed * 5, 300 + speed * 5, 40);
        circle(cirlce[i] + speed * 5, 350 + speed * 5, 50);
        circle(cirlce[i] + speed * 5, 400 + speed * 5, 50);
        circle(cirlce[i] + speed * 5, 450 + speed * 5, 40);
        circle(cirlce[i] + speed * 5, 500 + speed * 5, 30);
        circle(cirlce[i] + speed * 5, 550 + speed * 5, 20);
        circle(cirlce[i] + speed * 5, 600 + speed * 5, 10);

        
        
    }
}
