noseX=0;
noseY=0;
left_wristX=0;
right_wristX=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);

    canvas=createCanvas(550,550);
    canvas.position(560,100);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('#969A97');

    document.getElementById("square_side").innerHTML="Width and height of the square will be"+difference+"px";
    fill('#800080');
    stroke('#000000');
    square(noseX,noseY,difference);
}
function modelLoaded(){
    console.log("model loaded!");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        console.log("nose y ="+noseY);
        console.log("nose x ="+noseX);

        left_wristX=results[0].pose.leftWrist.x;
        right_wristX=results[0].pose.rightWrist.x;
        
        difference=Math.floor(left_wristX-right_wristX);

        console.log(" the difference between the left wrist x and right wrist y is ="+difference);
    }
}