// Modded by Isao Yamasita -- 20180204
// Originally by Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Clock
// Video: https://youtu.be/E4RyStef-gY

//var fontRegular, fontItalic, fontBold;
//function preload() {
  //fontRegular = loadFont('assets/Regular.ttf');
  //fontItalic = loadFont('assets/Italic.ttf');
  //fontBold = loadFont('assets/Bold.ttf');
//}

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  fill(0);
  textFont('Helvetica');
  text('Helvetica', 12, 60);
}

function draw() {
  background(0);
  smooth();
  drawDate();
  drawClock();
  drawSpd();
  drawTach();
  drawEngInst();

}

function drawSpd() {

}

function drawTach() {

}

function drawEngInst() {
  //drawEngInstFuel();
  //drawEngInstCoolantTemp();
  //drawEngInstOilTemp();
  //drawEngInstOilPress();
  //drawEngInstEGT();
  //drawEngInstFuelFlow();
  //drawEngInstIntakeAirTemp();
  //drawEngInstOilPress();
}

/*function drawEnvInst() {
  //drawOutsideAirTemp();
  //drawAirData(); //Altitude, Barometer Setting, etc...
  //drawTirePress();
}*/

function drawDate() {
  let dd = day();
  let mm = month();
  let yr = year();

  push();
  //rotate(90);
  textAlign(CENTER, CENTER);
  fill(255);
  strokeWeight(8);
  stroke(0, 0, 0, 192);
  textSize(24);
  text(mm + '/' + dd + '/' + yr, 200, 20);
  pop();
}

function drawClock() {
   translate(200, 200);
   rotate(-90);

   let hr = hour();
   let mn = minute();
   let sc = second();

   strokeWeight(4);
   stroke(255, 100, 150);
   noFill();
   let secondAngle = map(sc, 0, 60, 0, 360);
   arc(0, 0, 300, 300, 0, secondAngle);

   strokeWeight(6);
   stroke(150, 100, 255);
   let minuteAngle = map(mn, 0, 60, 0, 360);
   arc(0, 0, 280, 280, 0, minuteAngle);

   strokeWeight(8);
   stroke(150, 255, 100);
   let hourAngle = map(hr % 12, 0, 12, 0, 360);
   arc(0, 0, 260, 260, 0, hourAngle);

   push();
   rotate(secondAngle);
   //strokeWeight(4);
   //stroke(255, 100, 150);
   //line(0, 0, 100, 0);

   rotate(-90);
   fill(255, 100, 150, 255);
   strokeWeight(2);
   stroke(0, 0, 0, 255);
   triangle(-10, 120, 0, 140, 10, 120);
   rotate(90);
   pop();

   push();
   rotate(minuteAngle);
   stroke(150, 100, 255);
   line(10, 0, 75, 0);
   pop();

   push();
   rotate(hourAngle);
   stroke(150, 255, 100);
   line(0, 0, 50, 0);
   pop();

   push();
   fill(255);
   strokeWeight(16);
   point(0, 0);
   pop();

   push();
   rotate(90);
   textAlign(CENTER, CENTER);
   fill(255);
   strokeWeight(8);
   stroke(0, 0, 0, 192);
   textSize(72);
   text(hr + ':' + mn + ':' + sc, 0, 160);
   pop();
}
