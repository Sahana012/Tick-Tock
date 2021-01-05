var hr;
var mn;
var sc;

function setup() {
  createCanvas(500,500);

}

function draw() {
  background(0); 
  
  angleMode(DEGREES);

  hr = hour();
  hrAngle = map(hr, 0, 60, 0, 360);
  
  mn = minute();
  mnAngle = map(mn, 0, 60, 0, 360);
  
  sc = second();
  scAngle = map(sc, 0, 60, 0, 360);


  //sec arc
  push();
  fill(0);
  stroke(255, 0, 128);
  strokeWeight(7);
  arc(250, 250, 410, 410, 0, scAngle);
  pop();

  //min arc
  push();
  fill(0);
  stroke(0, 255, 123);
  strokeWeight(7)
  arc(250, 250, 380, 380, 0, mnAngle);
  pop();

  //hour arc
  push();
  fill(0);
  stroke(0, 136, 255);
  strokeWeight(7)
  arc(250, 250, 350, 350, 0, hrAngle);
  pop();

  //sec line
  push();
  translate(250,250);
  rotate(scAngle);
  stroke(255, 0, 128);
  strokeWeight(7);
  line(0, 0, 150, 0);
  pop();
 
  //min line
  push();
  translate(250,250);
  rotate(mnAngle);
  stroke(0, 255, 123);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();
  
  //hour line
  push();
  translate(250,250);
  rotate(hrAngle);
  stroke(0, 136, 255);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  drawSprites();
}