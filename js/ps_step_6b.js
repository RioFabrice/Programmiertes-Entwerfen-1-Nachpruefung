Homeworks.aufgabe = 6;

let fields = [];

class Block {

  constructor(attrs) {
    this.attrs = attrs;
    if (this.attrs.useRect) {
      this.drawFunc = rect;
    } else {
      this.drawFunc = ellipse;
    }
  }

  draw() {
    fill(this.attrs.color);
    this.drawFunc(this.attrs.pos.x, this.attrs.pos.y, this.attrs.size, this.attrs.size);
  }

  getColor() {
    return this.attrs.color;
  }

  changeColor(newColor) {
    if (this.drawFunc == rect) {
      this.attrs.color = newColor;
    }
  }

}

let size = 20;
let gap = 8;
let numCol = 15;
let numRow = 15;

let actPos = {x: 10, y: 0};
let move = {x: 0, y: 0};
let snake = []

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent('thecanvas');

  let patternWidth = (size + gap) * numCol - gap;
  let borderX = (windowWidth - patternWidth) / 2;
  let patternHeight = (size + gap) * numRow - gap;
  let borderY = (windowHeight - patternHeight) / 2;

  for (let col = 0; col < numCol; col += 1) {
    fields[col] = [];
    for (let row = 0; row < numRow; row++) {
      fields[col][row] = new Block({ color: 'red', pos: { x: borderX + col * (size + gap), y: borderY + row * (size + gap) }, size: size, useRect: true, hallo: false });
    }
  }
  fields[actPos.x][actPos.y].changeColor('magenta');
  placeFood();
  snake.unshift(fields[actPos.x][actPos.y]);
  snake[0].changeColor('magenta');
  frameRate(5);
}

function draw() {
  snakeMove();
  clear();
  for (let col = 0; col < numCol; col += 1) {
    for (let row = 0; row < numRow; row++) {
      fields[col][row].draw();
    }
  }
}

function placeFood() {
  fields[Math.floor(random(0, numCol))][Math.floor(random(0, numRow))].changeColor("green")
}

function snakeMove() {
  fields[actPos.x][actPos.y].changeColor('red');
  actPos.x += move.x;
  actPos.y += move.y;
  if (actPos.x > numCol - 1) {
    actPos.x = 0;
  }
  if (actPos.x < 0) {
    actPos.x = numCol - 1;
  }
  if (actPos.y > numRow - 1) {
    actPos.y = 0;
  }
  if (actPos.y < 0) {
    actPos.y = numRow - 1;
  }
  snake.unshift(fields[actPos.x][actPos.y]);
  switch (snake[0].getColor()) {
    case "green":
      placeFood()
      break;
    default:
      break;
  }
  snake[0].changeColor('magenta');
}

//Hide the HTML Text with h and show it again with s
function keyPressed(evt) {
  let divToHide = document.getElementsByClassName("overlay")[0];
  //divToHide.innerHTML = 'Hallo IG1!'
  switch (key) {
    case "h":
      divToHide.style.visibility = "hidden";
      break;
    case "s":
      divToHide.style.visibility = "visible";
      break;
    case "ArrowUp":
      evt.preventDefault();
      move = { x: 0, y: -1 };
      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.y = actPos.y > 0 ? actPos.y - 1 : numRow - 1;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("UP");
      break;
    case "ArrowDown":
      evt.preventDefault();
      move = { x: 0, y: 1 };
      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.y = actPos.y < numRow - 1 ? actPos.y + 1 : 0;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("DOWN");
      break;
    case "ArrowLeft":
      evt.preventDefault();
      move = { x: -1, y: 0 };
      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.x = actPos.x > 0 ? actPos.x - 1 : numCol - 1;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("LEFT");
      break;
    case "ArrowRight":
      evt.preventDefault();
      move = { x: 1, y: 0 };
      // fields[actPos.x][actPos.y].changeColor('red');
      // actPos.x = actPos.x < numCol - 1 ? actPos.x + 1 : 0;
      // fields[actPos.x][actPos.y].changeColor('magenta');
      console.log("RIGHT");
      break;
    default:
      console.log(key);
      break;
  }
}
