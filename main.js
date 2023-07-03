status = "";

function preload(){

}

function setup(){
    canvas = createCanvas(380,380);
    canvas.center();

    video = createCapture(380,380);
video.center();
video.hide();
}

function draw(){
image(video,0,0,480,380);
}

function Start(){
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object_name = document.getElementById("object_name").value;
    console.log("Object: "+object_name);
}

function modelLoaded(){
    console.log("The model has been loaded.");
    status = true;
}