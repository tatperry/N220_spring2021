var circleCity = {
    x: 20,
    y: 30,
    r: 2,
    color:[213,13,15],
};
// setting up canvas
function setup(){
    createCanvas(800,800);
}
function draw(){
    fill(circleCity.color);
    circleCity.x += 3;
    circleCity.y += 1;
    circleCity.r += 1;
    circle(circleCity.x, circleCity.y, circleCity.r);
}