// Tatiana Perry
// NEWM-N220
// Lab04
// February 18, 2021

let color =["#7ea04d","#fe7171","#ffb0b0"];

function setup(){
    createCanvas(200,200);

    for( var i = 0; i< color.length; i++){
        fill(color[i]);
        rect(20*i, 120, 20);
    }
}

