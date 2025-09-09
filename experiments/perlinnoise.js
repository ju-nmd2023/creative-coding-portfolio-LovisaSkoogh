/*function setup() {
  createCanvas(innerWidth, innerHeight);
  noFill();
  stroke(11, 170, 37);
}

function draw() {
  background(0);

  const positionY = 200;
  const divider = 10;
  noiseSeed(6);
  beginShape();
  for (let x = 0; x < width; x++) {
    //const y = positionY + Math.random() * 100;
    const y = positionY + noise(x / divider) * 200;
    vertex(x, y);
  }

  endShape();

  noLoop();
} */

function setup() {
  createCanvas(innerWidth, innerHeight);
}

const divider = 10;
const size = 10;
const numRows = 70;
const numCols = 70;

function draw() {
  background(50);
  noStroke();
  fill(178, 63, 63);

  noiseSeed(7);
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }
}
