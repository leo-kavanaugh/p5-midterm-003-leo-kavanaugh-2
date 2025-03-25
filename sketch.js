var x;
var changeDirection;
var y;
var changeDirection2;

function setup() {
    createCanvas(500, 600);
    background(200);
    changeDirection=false;
    x = 210;
    changeDirection2=false;
    y = 275
}

function draw() {
    fill(0, 0, 0);
    ellipse(250, 300, 240, 450);
    //Tux body
    fill(255, 255, 255);
    ellipse(250, 340, 160, 325);
    //Tux white
    fill(255, 255, 255);
    circle(210, 150, 50);
    //tux left eye
    fill(255, 255, 255);
    circle(275, 150, 50);
    //tux left eye
    fill(255, 137, 0);
    ellipse(240, 190, 115, 60);
    //tux beak
    fill(255, 137, 0);
    ellipse(200, 465, 80, 150);
    //tux left foot
    fill(255, 137, 0);
    ellipse(300, 465, 80, 150);
    //tux right foot
    fill(0, 0, 0);
    ellipse(140, 380, 60, 220);
    //tux left arm
    fill(0, 0, 0);
    ellipse(360, 380, 60, 220);
    //tux right arm

    circle(x,150,35);
    fill(0, 0, 0)
    if(x>=220){
        changeDirection=true}
    else if (x<=200){
        changeDirection=false}
    if (x>=200 && changeDirection == false){
        x=x+1}
    else if(changeDirection == true){
        x=x-1}
    //left pupil

    circle(y,150,35);
    fill(0, 0, 0)
    if(y>=285){
        changeDirection2=true}
    else if (y<=265){
        changeDirection2=false}
    if (y>=265 && changeDirection2 == false){
        y=y+1}
    else if(changeDirection2 == true){
        y=y-1}
    //right pupil
}