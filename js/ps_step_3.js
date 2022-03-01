Homeworks.aufgabe = 3;

/*
let hugoNumber = 13.1; // Integer, Float, Double, ...
let hugoString = "Text";
let hugoBoolean = true;
let hugoArray = ["Benno", "Marina", "Elijah", "Selina"];
*/

let numCol = 14;
let numRow = 8;
let borderX, borderY;
let length = 50;
let gap = 5;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  //document.addEventListener('keyup', onKeyUp);
  borderX = (windowWidth - (numRow * (length + gap) - gap)) /2;
  borderY = (windowHeight - (numCol * (length + gap) - gap)) /2;
}

function draw() {
  for (let col = 0; col < numCol; col++) {
    for (let row = 0; row < numRow; row++) {
      rect(borderX + row * (length + gap), borderY + col * (length + gap), length, length);
    }
  }
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



