function setup(){
    video = createCapture(VIDEO);
    video.size (550, 500);
    canvas = createCanvas (550, 500);
    canvas.position(560, 150);
    poseNet = 
    ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 function draw(){
    background("pink");
 }
 function modelLoaded(){
    console.log('Posenet Initialized');
 }
 function gotPoses(results){
    if(results > 0){
        console.log (results);
    }
 }