function setup() {
    createCanvas(500, 600);
    background(200);
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
    fill(0, 0, 0)
    circle(210, 150, 35);
    //tux left pupil
    fill(255, 255, 255);
    circle(275, 150, 50);
    //tux left eye
    fill(0, 0, 0);
    circle(275, 150, 35);
    //tux right pupil
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
}
