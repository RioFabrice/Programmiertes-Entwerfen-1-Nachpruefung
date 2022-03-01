Homeworks.aufgabe = 3;

/*
let hugoNumber = 13.1; // Integer, Float, Double, ...
let hugoString = "Text";
let hugoBoolean = true;
let hugoArray = ["Benno", "Marina", "Elijah", "Selina"];
*/

let numCol, numRow;

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');
  //document.addEventListener('keyup', onKeyUp);
}

function draw() {
  numCol = 10;
  numRow = 10;
  for (let col = 0; col < numCol; col++) {
    console.log("COL", col);
    rect(200, 200, 40, 40);
  }
  for (let row = 0; row < numRow; row++) {
    console.log("ROW", row)
    rect(200, 200, 40, 40);
  }
  console.log("DONE");
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
