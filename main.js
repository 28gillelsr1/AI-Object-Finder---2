
status="";

function preload(){
    
   
}

function setup(){
    canvas=createCanvas(450,380);
    canvas.position(400,100);
    video = createCapture(VIDEO);
  video.size(450,380);
  video.hide();
    
}

function draw(){
    image(video,0,0,480,380);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
    object_name=document.getElementById("object_name").value;
}

function modelLoaded(){
    console.log("Model Loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(1);
}