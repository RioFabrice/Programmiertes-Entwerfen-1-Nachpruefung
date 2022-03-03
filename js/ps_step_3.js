Homeworks.aufgabe = 3;

let numCol = 10;
let numRow = 10;
let borderX, borderY;
let length = 30;
let gap = 10;
let colors = []

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  for (let col = 0; col < numCol; col++) {
    colors[col] = [];
    for (let row = 0; row < numRow; row++) {
      colors[col][row] = "white";
    }
  }
  document.addEventListener("click", onMouseClick);
  borderX = (windowWidth - (numRow * (length + gap) - gap)) /2;
  borderY = (windowHeight - (numCol * (length + gap) - gap)) /2;
}

function draw() {
  for (let col = 0; col < numCol; col++) {
    for (let row = 0; row < numRow; row++) {
      fill(colors[col][row]);
      rect(borderX + row * (length + gap), borderY + col * (length + gap), length, length);
    }
  }
}

function onMouseClick() {
  let randomX = Math.floor(Math.random() * numCol);
  let randomY = Math.floor(Math.random() * numRow);
  colors[randomX][randomY] = "black"
  console.log("click")
}

//Hide the HTML Text with h and show it again with s
function keyTyped() {
  let divToHide = document.getElementsByClassName("overlay")[0];
  if (key == "h") {
    divToHide.style.visibility = "hidden";
  } else if (key == "s") {
    divToHide.style.visibility = "visible"
  }
}



