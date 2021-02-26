let color =["#1cfc03","#f4fc03","#fc0b03"];

function setup(){
    createCanvas(800,800);
    
    for( var i = 0; i< color.length; i++){
        fill(color[i]);
        ellipse(300, 100*i, 90, 80);
    }
}

