// Tatiana Perry
// NEWM-N220
// Lab04
// February 18, 2021

let comp = [0,0,0,0];
function setup(){
    createCanvas(400,300);
    
}

function draw(){
    console.log(comp);
    background(10);
    comp.push();
    comp.shift(mouseX);
    for(var i=0; i< comp.length; i++ ){
        circle(comp[i], 150, 30);
        rect(comp[i], 150, 30);
        circle(comp[i], 150, 30);
    }
}
