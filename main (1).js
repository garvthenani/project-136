status = "";
video = "";
function preload()
{   
video = createVideo('video.mp4');
video.hide();
}
function setup()
{
canvas = createCanvas(800, 500);
canvas.center();
}
function draw()
{
image(video, 0, 0, 800, 500);
}
function start()
{
 objectDetector = ml5.objectDetector('cocossd', modelLoaded);
 document.getElementById("status").innerHTML = 'status : detecting object';  
}
function modelLoaded()
{
 console.log('model is Loaded');
 status = true;
 video.loop();
 video.speed(1);
 video.volume(0);    
}