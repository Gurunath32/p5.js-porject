function preload() {}

function setup() {
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw() {
    image(video,0,0,640,480);
    tint(tint_color);
    fill(255,0,0);
    stroke(0,255,255);
    rect(50,15,540,30);
    rect(50,465,570,30);
    rect(50,15,30,450);
    rect(590,15,30,450);
    fill(0,0,255);
    stroke(0,255,255);
    ellipse(50,50,75,100);
    ellipse(50,465,75,100);
    ellipse(590,50,75,100);
    ellipse(590,465,75,100);
}

function take_snapshot() {
save("filter_picture.png");
}

function filter_tint() {
    tint_color=document.getElementById("color_name").value;
}