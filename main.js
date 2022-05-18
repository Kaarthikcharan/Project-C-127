song="";
song_2="";
function preload(){
    song=loadSound("harrypotter-Lumos.mp3");
    song_2=loadSound("Peterpan-Diatas Normal.mp3");
}
function setup(){
    canvas=createCanvas(600, 500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 600, 500);
}
function play(){
    song.play();
}