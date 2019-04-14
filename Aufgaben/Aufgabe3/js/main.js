//Lege Array an
let stack = ["♥7", "♥8", "♥9", "♥10", "♥J", "♥D", "♥K", "♥A", "♦7", "♦8", "♦9", "♦10", "♦J", "♦D", "♦K", "♦A", "♣7", "♣8", "♣9", "♣10", "♣J", "♣D", "♣K", "♣A", "♠7", "♠8", "♠9", "♠10", "♠J", "♠D", "♠K", "♠A",];
//Handkarten array
let handcards = [];
//Neues Handkarten array
let newhandcards = [];
//Ablagen array
let filing = [];
//Eingabewert von "prmopt()" als Int
let amountInt = parseInt(prompt("Karten"), 10);
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
for (let i = 0; i < amountInt; i++) {
    //Zuffallswahl aus "Stack-Array"
    function randomPicking() {
        //Generiert Zufallswert zwischen "0" und "32"
        let y = Math.floor(Math.random() * stack.length);
        let pick = stack.splice(y, 1);
        handcards.push(pick[0]);
        return pick;
    }
    console.log(randomPicking()[0]);
}
console.log("handcards: " + handcards);
function createCard() {
    for (let i = 0; i < amountInt; i++) {
        let div = document.createElement("div");
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
function pushCard(_event) {
    let hold = handcards.splice(0, 1);
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
function pullCard() { }
function sort() { }
//console.log(pushCard());
//# sourceMappingURL=main.js.map