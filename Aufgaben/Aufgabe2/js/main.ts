//Lege Array an
let Stack: string[] = ["♥7", "♥8", "♥9", "♥10", "♥J", "♥D", "♥K", "♥A", "♦7", "♦8", "♦9", "♦10", "♦J", "♦D", "♦K", "♦A", "♣7", "♣8", "♣9", "♣10", "♣J", "♣D", "♣K", "♣A", "♠7", "♠8", "♠9", "♠10", "♠J", "♠D", "♠K", "♠A",];

//Handkarten array
let Handcards: string[]=[]
//Abfrage der Kartenanzahl
let promptvalue: string = prompt("Wie viele Karten möchten Sie?");

//Konvertiert "String" aus Abfrage in "Integer"
let parsedpromptvalue: number = parseInt(promptvalue, 10);
console.log("Wert aus Eingabe: " + parsedpromptvalue);


//Generiert Karten in Anzahl des Abfragewertes
for (let i: number = 0; i < parsedpromptvalue; i++) {

    //Generiert Zufallswert zwischen "0" und "32"
    let x: number = Math.floor(Math.random() * Stack.length);
    console.log("Zufallswert: " + x);

    //Extrahiert einen Zufallsert aus "stackarray"
    let hold = Stack.splice(x, 1);
    console.log("hold: " + i + ": " + hold);
    Handcards.push(hold[0]);
    console.log(Handcards);

    function build(html:string, _acard:string){
        let _card=document.createElement('div');
        let div=`<div>
                <p> </p>
                
                
                </div>`;
            _card.innerHTML = div;
            document.getElementById(html).appendChild(_card);
}
}

function init(){
    parsedpromptvalue
}
document.addEventListener('DOMContentLoaded', init);