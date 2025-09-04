function setup() {
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
}
