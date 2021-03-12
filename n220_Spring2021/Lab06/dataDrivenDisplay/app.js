var teaCircle = {
    x: 400,
    y: 400,
    r: 400,
    color:[169,43,52],
};
// setting up canvas
function setup(){
    createCanvas(800,800);
}
function draw(){
    fill(teaCircle.color);
    circle(teaCircle.x, teaCircle.y, teaCircle.r);
}