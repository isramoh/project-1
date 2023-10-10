function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);

  rect(10, 10, 100, 100);

  push()
    fill("red");
    ellipse(100, 100, 150);
  pop()
}
