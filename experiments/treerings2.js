function setup() {
  createCanvas(innerWidth, innerHeight);
  background(97, 115, 90);
  stroke(193, 206, 129);
  strokeWeight(6);
  noFill();
}

let scale = 650;
let resolution = 0.002;
let numPoints = 100;

let radius = 130;
let numRings = 20;
function draw() {
  noiseSeed(23);
  for (r = 0; r < radius; r += radius / numRings) {
    beginShape();
    for (
      a = -TAU / numPoints;
      a < TAU + TAU / numPoints;
      a += TAU / numPoints
    ) {
      var x = 700 + r * cos(a);
      var y = 400 + r * sin(a);

      var n = map(noise(x * resolution, y * resolution), 0, 1, -scale, scale);

      curveVertex(x + n, y + n);

      if (random() > 0.8) {
        endShape();
        beginShape();
      }
    }
    endShape();
  }
  noLoop();
}


// in progress
