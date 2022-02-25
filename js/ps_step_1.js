Homeworks.aufgabe = 1;

console.log("BEGIN");
let greeting = "Hallo Benno";
const greet = "Hallo";
let check;
toDo();
let lampe;

function init() {
  console.log(greet);
  greeting = 17;
  // greet = 17;
  check = "Benno";
  console.log(check);
  toDo();
  lampe = document.getElementById("lightbulb");
  console.log(lampe);
  document.addEventListener("click", onMouseClick);
}

function toDo() {
  console.log(greeting);
  console.log(check);
}

function onMouseClick() {
    console.log("Der User hat auf die Seite geklickt");
    if (lampe.getAttribute("fill")=="yellow") {
        lampe.setAttribute("fill", "grey");
        console.log("Lampe Grau");
    } else {
        lampe.setAttribute("fill", "yellow");
        console.log("Lampe Gelb");
    }
}
console.log("END");