Homeworks.aufgabe = 2;

let counter = 0

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener("click", onMouseClick);
}

function draw() {
  background(40, 10);
  let c = color(Math.random() * 256, Math.random() * 256, Math.random() * 256);
  fill(c);
  ellipse(Math.random() * windowWidth, Math.random() * windowHeight, 20, 20);
}

function onMouseClick() {
  console.log("click");
  counter++;
}
