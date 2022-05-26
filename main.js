function preload(){

}
function setup(){
canvas=createCanvas(680,480);
canvas.position(150,150);
video=createCapture(VIDEO);
video.hide();
tintColor=" ";
}
function draw(){
    image(video,230,150,220,200);
tint(tintColor);
fill(255,0,0);
stroke(255,0,0);
circle(50,50,80);
circle(590,50,80);
circle(50,430,80);
circle(590,430,80);
fill(0,255,0);
stroke(0,255,0);
rect(90,40,460,20);
rect(90,420,460,20);
rect(40,90,20,300);
rect(580,90,20,300);
}
function take_snapshot(){
save("mypicture.png");
}
function apply_filter(){
    tintColor=document.getElementById("color_name").value;
}
