function setup() {
  createCanvas(innerWidth, innerHeight);
  background(97, 115, 90);
  stroke(0);
  strokeWeight(1);
  noFill();
}

// the following code was adapted from https://www.gorillasun.de/blog/radial-perlin-noise-and-generative-tree-rings/ retrieved 03-09-25
let scale = 70;
let resolution = 0.003;
let numPoints = 100;

let radius = 250;
let numRings = 40;
function draw() {
  noiseSeed(7);
  for (r = 0; r < radius; r += radius / numRings) {
    beginShape();
    for (
      a = -TAU / numPoints;
      a < TAU + TAU / numPoints;
      a += TAU / numPoints
    ) {
      var x = width / 2 + r * cos(a);
      var y = height / 2 + r * sin(a);

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
