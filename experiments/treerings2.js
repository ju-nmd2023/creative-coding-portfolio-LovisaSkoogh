function setup() {
  createCanvas(innerWidth, innerHeight);
  background(97, 115, 90);
  stroke(144, 168, 135);
  strokeWeight(3);
  noFill();
}

let scale = 650;
let resolution = 0.002;
let numPoints = 100;

let radius = 130;
let numRings = 20;
function draw() {
  noiseSeed(23);

  push();
  translate(width / 2, height / 2);

  for (r = 0; r < radius; r += radius / numRings) {
    beginShape();
    push();
    rotate(frameCount / 20);
    for (
      a = -TAU / numPoints;
      a < TAU + TAU / numPoints;
      a += TAU / numPoints
    ) {
      var x = r * cos(a);
      var y = r * sin(a);

      var n = map(noise(x * resolution, y * resolution), 0, 1, -scale, scale);

      curveVertex(x + n, y + n);

      if (random() > 0.8) {
        endShape();
        beginShape();
      }
    }
    pop();
    endShape();
  }

  pop();

  ellipse(width / 2, height / 2, 500);
  ellipse(width / 2, height / 2, 480);
  ellipse(width / 2, height / 2, 400);
  ellipse(width / 2, height / 2, 380);
  ellipse(width / 2, height / 2, 370);
  ellipse(width / 2, height / 2, 330);
  ellipse(width / 2, height / 2, 100);
  ellipse(width / 2, height / 2, 200);
  ellipse(width / 2, height / 2, 180);
}
