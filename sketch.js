let a;
let b;
let direction;
let arm1;
let arm2;
let arm3;
let arm4;
var Rwave = 10;
var mic;
var micLevel;

function setup() {
  createCanvas(400, 400);
 angleMode(DEGREES);
  
  arm1 = new Arm (10, 10, 10, 0.5);
  
  arm2 = new Arm (20, 20, 10, 1.5);
  
  arm3 = new Arm (15, 15, 10, 1);
  
  arm4 = new Arm (25, 25, 10, 2);

  
  mic = new p5.AudioIn()
  mic.start();
  
  a = 0 ;
  b = width ;
  direction = true; 
  frameRate(30);
  
}

function draw() {

  console.log("mic level " + mic.getLevel());
  
  micLevel = mic.getLevel();
  Rwave = map(mic.getLevel(), 0, .1, 345, 369);
  
  
  
      background(330, 200, 170);
   
  arm1.display();
  arm2.display();
  arm3.display();
  arm4.display();
  
  arm1.move();
  arm2.move();
  arm3.move();
  arm4.move();

  drawghostbody();
  drawrightarm(micLevel * 10); // parameter = angle rotation

  a++
  if (a > width) {
    a = 0;
    direction = !direction;
  }
  if (direction === true) {
    stroke(a);
  } else {
    stroke(width - a);
  }
  line(a, 0, a, height / 2);

  b--;
  if (b < 0) {
    b = width;
  }
  if (direction == true) {
    stroke(width - b);
  } else {
    stroke(b);
  }
  line(b, height / 2 + 1, b, height);
}



function drawghostbody(){
   // draw ghost body
  beginShape();
  vertex(width * .4, height * .17);
  vertex(width * .5, height * .17);
  vertex(width * .6, height * .19);
  vertex(width * .62, height * .2);
  vertex(width * .7, height * .23);
  vertex(width * .73, height * .3);
  vertex(width * .72, height * .4);
  vertex(width * .7, height * .6);
  vertex(width * .68, height * .7);
  vertex(width * .65, height * .8);
  vertex(width * .7, height * .82);
  vertex(width * .8, height * .8);
  vertex(width * .79, height * .7);
  vertex(width * .86, height * .8);
  vertex(width * .8, height * .9);
  vertex(width * .7, height * .93);
  vertex(width * .6, height * .91);
  vertex(width * .52, height * .9);
  vertex(width * .5, height * .89);
  vertex(width * .4, height * .82);
  vertex(width * .33, height * .7);
  vertex(width * .3, height * .6);
  vertex(width * .25, height * .5);
  vertex(width * .23, height * .35);
  vertex(width * .3, height * .18);
  vertex(width * .4, height * .17);
  endShape(CLOSE);
}

function drawrightarm(){
     // right arm
  push()
  rotate(mouseX)
  beginShape();
  vertex(width * .73, height * .33);
  vertex(width * .8, height * .2);
  vertex(width * .85, height * .3);
  vertex(width * .83, height * .4);
  vertex(width * .8, height * .49);
  vertex(width * .7, height * .53);
  endShape(CLOSE);
  pop()
   // draw eye
  fill(255)
  stroke(0)
  circle(width * .4, width * .4, width * .1)
  
  // draw right eye
  fill(255)
  stroke(0)
  circle(width * .6, width * .4, width * .1)
  
  //draw pupil
  fill(0)
  circle(width * .4, width * .4, width * .05)
  
  //draw right pupil
  fill(0)
  circle(width * .6, width * .4, width * .05)
  
  //draw mouth
  fill(255)
  stroke(0)
  circle(width * .5, width * .5, width * .1)
}
