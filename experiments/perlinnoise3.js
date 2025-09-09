function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(7);
}

const divider = 1;
const size = 10;
const numRows = 40;
const numCols = innerHeight;
let counter = 0;

function draw() {
  background(26,42,60);
  strokeWeight(2);
  stroke(246, 137, 77);
  fill(84, 195, 50);

  noiseSeed(7);
  for (let y = 15; y < numRows; y++) {
    for (let x = 15; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  fill(229, 206, 165);
  stroke(0);
  strokeWeight(8);
  rect(110, 110, 390, 330, 20);
  noStroke();
  fill(222, 155, 220);
  rect(130, 130, 350, 290, 30);

  fill(213, 114, 154);
  rect(200, 200, 20);
  rect(270, 350, 20);
  rect(400, 370, 20);
  rect(360, 250, 20);
  rect(160, 320, 20);
  rect(290, 250, 20);
  rect(400, 180, 20);

  counter++;
}
