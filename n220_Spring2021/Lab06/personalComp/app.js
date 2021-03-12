var circleCity = {
    x: 20,
    x2: 30,
    x3: 25,
    x4: 1,
    y: 30,
    y2: 40,
    y3: 35,
    y4: 20,
    r: .5,
    r2: .5,
    r3: .5,
    r4: 2,
    color:[213,13,15],
    color2: [189, 90, 146],
    color3: [210, 150, 79],
    color4: [53,60,103]
};
// setting up canvas
function setup(){
    createCanvas(800,800);
}
function draw(){
    // rectangle 1
    fill(circleCity.color4);
    circleCity.x += 3;
    circleCity.y += 1;
    circleCity.r += 1;
    rect(circleCity.x, circleCity.y, circleCity.r);
    // rectangle 2
    circleCity.x2 += 2;
    circleCity.y2 += 3;
    circleCity.r2 += 1;
    rect(circleCity.x2, circleCity.y2, circleCity.r2);
    // rectangle 3
    circleCity.x3 += 1.5;
    circleCity.y3 += 2;
    circleCity.r3 += 1.5;
    rect(circleCity.x3, circleCity.y3, circleCity.r3);
    // rectangle 4
    circleCity.x4 += 1;
    circleCity.y4 += 1.5;
    circleCity.r4 += 1.5;
    rect(circleCity.x4, circleCity.y4, circleCity.r4);
}