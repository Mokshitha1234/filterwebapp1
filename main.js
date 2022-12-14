mouthX = 0;
mouthY = 0;

function preload(){
// to load files


}

function setup(){
// to create elements 
canvas = createCanvas(300,300)
canvas.center()

video = createCapture(VIDEO)
video.size(300,300)
video.hide()

poseNet = ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses)


}

function draw(){
// to draw whatever you like on the canvas
image(video,0,0,300,300)

}

function take_snapshot(){
// when you take a snapshot
save('mustache-filter.png')

}

function modelLoaded(){
// to check if the poseNet modle has been successfully loaded in our program or not
console.log("poseNet has been initialized")


}

function gotPoses(results){
// to check the result from poseNet
if(results.length>0){
console.log(results)
mouthX = results[0].pose.mouth.x;
mouthY = results[0].pose.mouth.y;


}


}