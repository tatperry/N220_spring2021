// Tatiana Perry
// NEWM-N220
// Lab04
// February 18, 2021

let comp = [0,0,0,0];

let square = [0,0,0,0];

let rectangle =[0,0,0,0];

function setup(){
    createCanvas(400,400);
    
}

function draw(){
    console.log(comp);
    console.log(square);
    console.log(rectangle);
    background(10, .9);
    comp.push(mouseX);
    square.push(mouseX);
    rectangle.push(mouseX);

// top squares
    for(var i=0; i< rectangle.length; i++){
        fill(900,0,0,0);
        rect(rectangle[i], 70, 30);
    }
    // middle squares
    for(var i=0; i< comp.length; i++ ){
        fill(30, 0, 0, 0);
        rect(comp[i], 170, 30);   
    }
    // bottom squares
    for(var i=0; i< square.length; i++){
        fill(900,0,0,0);
        rect(square[i], 270, 30);
    }

}
