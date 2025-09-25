// This code was adapted from https://codepen.io/pixelkind/pen/OJrRzOm retrieved 17-09-25
class Agent {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.lastPosition = createVector(x, y);
    this.acceleration = createVector(0, 0);
    this.velocity = createVector(0, 0);
  }

  follow(desiredDirection) {
    desiredDirection = desiredDirection.copy();
    let steer = p5.Vector.sub(desiredDirection, this.velocity);
    steer.limit(this.maxForce);
    this.applyForce(steer);
  }

  applyForce(force) {
    this.acceleration.add(force);
  }

  update() {
    this.lastPosition = this.position.copy();

    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
  }

  checkBorders() {
    if (this.position.x < 0) {
      this.position.x = innerWidth;
      this.lastPosition.x = innerWidth;
    } else if (this.position.x > innerWidth) {
      this.position.x = 0;
      this.lastPosition.x = 0;
    }
    if (this.position.y < 0) {
      this.position.y = innerHeight;
      this.lastPosition.y = innerHeight;
    } else if (this.position.y > innerHeight) {
      this.position.y = 0;
      this.lastPosition.y = 0;
    }
  }

  draw() {
    push();
    stroke(913, 144, 197, 50);
    strokeWeight(4);
    line(
      this.lastPosition.x,
      this.lastPosition.y,
      this.position.x,
      this.position.y
    );
    pop();
  }
}

let umbrella;

function setup() {
  createCanvas(innerWidth, innerHeight);
  rectMode(CENTER);
  background(50, 34, 41);
  field = generateField();
  generateAgents();

  // this creates the rectangle
  umbrella = createObject(width / 2, height / 2, 400, 100);
}

// The following 8 lines of code was adapted from https://editor.p5js.org/mleisz/sketches/zNFvlBgbJ retrieved 18-09-25
function createObject(x, y, w, h) {
  return {
    x: x,
    y: y,
    w: w,
    h: h,
  };
}

function checkCollision(objectA, objectB) {
  if (
    objectA.x - objectA.w / 2 < objectB.x + objectB.w / 2 &&
    objectA.x + objectA.w / 2 > objectB.x - objectB.w / 2 &&
    objectA.y - objectA.h / 2 < objectB.y + objectB.h / 2 &&
    objectA.y + objectA.h / 2 > objectB.y - objectB.h / 2
  ) {
    return true;
  } else {
    return false;
  }
}

// The following 8 lines of code was adapted from https://editor.p5js.org/mleisz/sketches/zNFvlBgbJ retrieved 18-09-25
function agentAsObject(agent) {
  return {
    x: agent.position.x,
    y: agent.position.y,
    w: 2,
    h: 2,
  };
}

function generateField() {
  let field = [];
  noiseSeed(Math.random() * 400);
  for (let x = 0; x < maxCols; x++) {
    field.push([]);
    for (let y = 0; y < maxRows; y++) {
      const value = noise(x / divider, y / divider) * Math.PI * 2;
      field[x].push(p5.Vector.fromAngle(value));
    }
  }
  return field;
}

function generateAgents() {
  for (let i = 0; i < 500; i++) {
    let agent = new Agent(
      Math.random() * innerWidth,
      Math.random() * innerHeight,
      7,
      0.1
    );
    agents.push(agent);
  }
}

const fieldSize = 2000;
const maxCols = Math.ceil(innerWidth / fieldSize);
const maxRows = Math.ceil(innerHeight / fieldSize);
const divider = 9;
let field;
let agents = [];

function draw() {
  for (let agent of agents) {
    const x = Math.floor(agent.position.x / fieldSize);
    const y = Math.floor(agent.position.y / fieldSize);
    const desiredDirection = field[x][y];
    agent.follow(desiredDirection);
    agent.update();
    agent.checkBorders();
    agent.draw();

    //checks collision with umbrella PLEASE WORK
    if (checkCollision(agentAsObject(agent), umbrella)) {
      agent.position.y = umbrella.y - umbrella.h / 2 - 1;
    }
  }

  // draws the rectangle that the rain collides with
  fill(179, 115, 158);
  rect(umbrella.x, umbrella.y, umbrella.w, umbrella.h);
}
