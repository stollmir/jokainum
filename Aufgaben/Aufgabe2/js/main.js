//Lege Array an
let Stack = ["♥7", "♥8", "♥9", "♥10", "♥J", "♥D", "♥K", "♥A", "♦7", "♦8", "♦9", "♦10", "♦J", "♦D", "♦K", "♦A", "♣7", "♣8", "♣9", "♣10", "♣J", "♣D", "♣K", "♣A", "♠7", "♠8", "♠9", "♠10", "♠J", "♠D", "♠K", "♠A",];
//Handkarten array
let Handcards = [];
//Abfrage der Kartenanzahl
let promptvalue = prompt("Wie viele Karten möchten Sie?");
//Konvertiert "String" aus Abfrage in "Integer"
let parsedpromptvalue = parseInt(promptvalue, 10);
console.log("Wert aus Eingabe: " + parsedpromptvalue);
//Generiert Karten in Anzahl des Abfragewertes
for (let i = 0; i < parsedpromptvalue; i++) {
    //Generiert Zufallswert zwischen "0" und "32"
    let x = Math.floor(Math.random() * Stack.length);
    console.log("Zufallswert: " + x);
    //Extrahiert einen Zufallsert aus "stackarray"
    let hold = Stack.splice(x, 1);
    console.log("hold: " + i + ": " + hold);
    Handcards.push(hold[0]);
    // erstelle ein neues div Element
    // und gib ihm Style
    // und Inhalt
    let newDiv = document.createElement("div");
    newDiv.style.position = "relative";
    newDiv.style.border = "solid pink";
    newDiv.style.display = "inline-block";
    newDiv.style.padding = "2%";
    newDiv.style.left = "15%";
    newDiv.style.width = "2%";
    let newContent = document.createTextNode(hold[0]);
    newDiv.appendChild(newContent);
    // füge das neu erstellte Element und seinen Inhalt ins DOM ein
    document.body.appendChild(newDiv);
}
//# sourceMappingURL=main.js.map