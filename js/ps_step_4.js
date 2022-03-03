Homeworks.aufgabe = 4;

let fields = [];

//let hugoObject = {color: 'green', pos: {x: 90, y: 0}, size: 20};

class Block {

  constructor(attrs) {
    this.attrs = attrs;
    this.attrs.useRect = true;
  }

  draw() {
    ellipseMode(CORNER)
    fill(this.attrs.color);
    if (this.attrs.useRect) {
      rect(this.attrs.pos.x, this.attrs.pos.y, this.attrs.size, this.attrs.size);
    } else {
      ellipse(this.attrs.pos.x, this.attrs.pos.y, this.attrs.size, this.attrs.size);
    }
  }

  // sleep() {
  //   console.log(this.attrs);
  // }

  changeColor(newColor) {

  }

}

let size = 20;
let gap = 8;
let numCol = 10;
let numRow = 10;
let colors = [];

function setup() {
  
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');

  document.addEventListener("click", onMouseClick);
  
  let patternWidth = (size + gap) * numCol - gap;
  let borderX = (windowWidth - patternWidth) / 2;
  let patternHeight = (size + gap) * numRow - gap;
  let borderY = (windowHeight - patternHeight) / 2;

  for (let col = 0; col < numCol; col += 1) {
    fields[col] = [];
    for (let row = 0; row < numRow; row++) {
      fields[col][row] = new Block({color: 'red', pos: {x: borderX + col * (size + gap), y: borderY + row * (size + gap)}, size: size});
    }
  }
}

function draw() {
  clear();
  for (let col = 0; col < numCol; col += 1) {
    for (let row = 0; row < numRow; row++) {
      fields[col][row].draw();
    }
  }
  // fields.forEach((field, idx) => {
  //   field.draw();
  // });
}

function onMouseClick() {
  let randomX = Math.floor(Math.random() * numCol);
  let randomY = Math.floor(Math.random() * numRow);
  fields[randomX][randomY].attrs.color = color(Math.random() * 255, Math.random() * 255, Math.random() * 255);
  randomPick = random(0,100);
  if(randomPick < 50)
    {fields[randomX][randomY].attrs.useRect = false}
  else
    {fields[randomX][randomY].attrs.useRect = true}
  console.log("click");
  console.log(this.useRect);
}

function keyTyped() {
  let divToHide = document.getElementsByClassName("overlay")[0];
  if (key == "h") {
    divToHide.style.visibility = "hidden";
  } else if (key == "s") {
    divToHide.style.visibility = "visible"
  }
}

