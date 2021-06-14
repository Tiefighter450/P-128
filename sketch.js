music1 = "";
music2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
function setup() {
  music1 = loadSound('music.mp3');
  music2 = loadSound('music2.mp3');
  canvas = createCanvas(597, 498);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log("Model loaded!");
}

function gotPoses(results) {
  if(results.length > 0) {
      console.log(results);
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("Left Wrist Y = " + leftWristY + "Right Wrist Y = " + rightWristY);
  }
}

function draw() {
  canvas.center();
  image(video, 0, 0, 597, 498);
}
