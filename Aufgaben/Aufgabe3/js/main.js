//Lege Array an
let stack = ["♥7", "♥8", "♥9", "♥10", "♥J", "♥D", "♥K", "♥A", "♦7", "♦8", "♦9", "♦10", "♦J", "♦D", "♦K", "♦A", "♣7", "♣8", "♣9", "♣10", "♣J", "♣D", "♣K", "♣A", "♠7", "♠8", "♠9", "♠10", "♠J", "♠D", "♠K", "♠A",];
//Handkarten array
let handcards = [];
//Eingabewert von "prmopt()" als Int 
let amountInt = parseInt(prompt("Karten"), 10);
document.addEventListener("click", randomPicking);
document.getElementById('handcards').addEventListener('click', pushCard());
document.getElementById('stack').addEventListener('click', pullCard());
document.addEventListener('keydown', event => {
    if (event.keyCode == 32) {
        pullCard();
    }
    else {
        return;
    }
});
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
    // erstelle ein neues div Element
    // und gib ihm Style
    // und Inhalt
    function createCard() {
        let newDivi = document.createElement("div");
        newDivi.style.position = "relative";
        newDivi.style.border = "solid pink";
        newDivi.style.display = "inline-block";
        newDivi.style.padding = "2%";
        newDivi.style.left = "15%";
        newDivi.style.width = "2%";
        let newContenti = document.createTextNode(handcards[i]);
        newDivi.appendChild(newContenti);
        return newDivi;
    }
    // füge das neu erstellte Element und seinen Inhalt ins DOM ein
    document.body.appendChild(createCard());
}
console.log("handcards: " + handcards);
//# sourceMappingURL=main.js.map