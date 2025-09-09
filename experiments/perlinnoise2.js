/*function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(1);
}

const divider = 10;
const size = 10;
const numRows = 20;
const numCols = 20;

let counter = 0;

function draw() {
  background(255);
  noStroke();
  fill(0);

  //noiseSeed(6);
  for (let y = 0; y < numRows; y++) {
    for (let x = 0; x < numCols; x++) {
      const value = noise(x / divider, y / divider, counter) * size;
      ellipse(size / 2 + x * size, size / 2 + y * size, value);
    }
  }

  counter++;
}
*/

function setup() {
  createCanvas(innerWidth, innerHeight);
  frameRate(10);
}

const divider = 10;
const size = 9; // smaller cells
const numRows = 20; // fewer rows
const numCols = 20; // fewer columns
let counter = 0;

function draw() {
  background(50);
  noStroke();
  fill(178, 63, 63);

  // the following eigth lines of code were adapted from Chatgpt, https://chatgpt.com/share/68bfeca0-3ea8-8010-aa1a-199dd7ebcf19
  let boxWidth = numCols * size;
  let boxHeight = numRows * size;

  // how many boxes horizontally and vertically
  let boxesX = 7;
  let boxesY = 3;

  for (let by = 0; by < boxesY; by++) {
    for (let bx = 0; bx < boxesX; bx++) {
      let offsetX = bx * (boxWidth + 10);
      let offsetY = by * (boxHeight + 40);

      for (let y = 0; y < numRows; y++) {
        for (let x = 0; x < numCols; x++) {
          const value = noise(x / divider, y / divider, counter) * size;
          ellipse(
            offsetX + size / 2 + x * size,
            offsetY + size / 2 + y * size,
            value
          );
        }
      }
    }
  }

  counter++;
}
