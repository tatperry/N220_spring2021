// 
// Tatiana Perry
// N220_spring2021
// Assignment 1 - Personal Composition
// app.js
// January 28, 2021
// 
function setup(){
    createCanvas(800,600)
  }
  function draw(){
    // head
    fill('orange');
    circle(200, 200, 300);


    // left eye
    fill(255);
    circle(150,150,75);
    fill(0);
    // Main part of the left eye
    circle(150,150,50); 
    fill(255);
    circle(140,140,8);


    // right eye
     fill(255);
    circle(250,150,75);
    fill(0);
    // Main part of the right eye
    circle(250,150,50); 
    fill(255);
    circle(240,140,8);
  

    // mouth (x, y, width, height, start, stop)
    fill(0,0,0,1); //RGBA
    strokeWeight(7);
    arc(200,225,200,140,0,PI);
    strokeWeight(2.5); // To prevent any issues!
  }