Homeworks.aufgabe = 2;

let counter = 0
let size = 20

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  document.addEventListener("click", onMouseClick);
}

function draw() {
  background(40, 10);
  let c = color(Math.random() * 256, Math.random() * 256, Math.random() * 256);
  fill(c);
  ellipse(Math.random() * windowWidth, Math.random() * windowHeight, size, size);
}

function onMouseClick() {
  console.log("click");
  counter++;

  switch (counter) {
    case 1:
      console.log("click 1");
      size = 40;
      break;
    case 2:
      console.log("click 2");
      break;
    case 3:
      console.log("click 3");
      break;
    case 4:
      console.log("click 4");
      break;
    default:
  }
}
