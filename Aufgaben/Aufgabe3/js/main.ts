//Lege Array an
let stack: string[] = ["♥7", "♥8", "♥9", "♥10", "♥J", "♥D", "♥K", "♥A", "♦7", "♦8", "♦9", "♦10", "♦J", "♦D", "♦K", "♦A", "♣7", "♣8", "♣9", "♣10", "♣J", "♣D", "♣K", "♣A", "♠7", "♠8", "♠9", "♠10", "♠J", "♠D", "♠K", "♠A",];
//Handkarten array
let handcards: string[] = [];
//Neues Handkarten array
let newhandcards: string[] = [];
//Ablagen array
let filing: string[] = [];
//Eingabewert von "prmopt()" als Int
let amountInt: number = parseInt(prompt("Karten"), 10);

document.addEventListener("DOMContentLoaded", createCard);
document.addEventListener("click", pushCard);
document.addEventListener('click', pullCard);
//document.addEventListener('keydown',space) {
  // if(keyCode==32){
  // pullCard();
// }
//else{return;}
//}
document.addEventListener("DOMContentLoaded", createCard);

for (let i: number = 0; i < amountInt; i++) {

  //Zuffallswahl aus "Stack-Array"
  function randomPicking(): string[] {
    //Generiert Zufallswert zwischen "0" und "32"
    let y: number = Math.floor(Math.random() * stack.length);
    let pick: string[] = stack.splice(y, 1);
    handcards.push(pick[0]);

    return pick;
  }
  console.log(randomPicking()[0]);
}
console.log("handcards: " + handcards);

function createCard() {
  for (let i: number = 0; i < amountInt; i++) {
    let div = document.createElement("div")
    div.style.position = "relative";
    div.style.border = "solid pink";
    div.style.display = "inline-block";
    div.style.padding = "2%";
    div.style.left = "2%";
    div.style.width = "2%";

    div.appendChild(document.createTextNode(handcards[i]));
    document.getElementById("handcards").appendChild(div);
  }
}

function pushCard(_event: Event) {
  let hold: string[] = handcards.splice(0, 1);
  filing.push(hold[0]);
  console.log("hold " + hold);
  console.log("filing " + filing);
  console.log("handcards " + handcards);

  let element = document.getElementById("handcards");
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  createCard();
}

function pullCard() {}
function sort(){}
//console.log(pushCard());
