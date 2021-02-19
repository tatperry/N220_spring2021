// Tatiana Perry
// NEWM-N220
// Lab04
// February 18, 2021

let cirlce = [0,0,0,0,0,0,0,0,0,0];
function setup(){
    createCanvas(400,300);
    
}

function draw(){
    console.log(cirlce);
    background(10);
    cirlce.push( mouseX);
    cirlce.shift();
    for(var i=0; i< cirlce.length; i++ ){
        circle(cirlce[i], 150, 30);
    }
}