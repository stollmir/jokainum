var Aufgabe3;
(function (Aufgabe3) {
    //Lege Array an
    let stack = ["♥7", "♥8", "♥9", "♥10", "♥J", "♥D", "♥K", "♥A", "♦7", "♦8", "♦9", "♦10", "♦J", "♦D", "♦K", "♦A", "♣7", "♣8", "♣9", "♣10", "♣J", "♣D", "♣K", "♣A", "♠7", "♠8", "♠9", "♠10", "♠J", "♠D", "♠K", "♠A",];
    //Handkarten array
    let handcards = [];
    //Ablagen array
    let filing = [];
    //Eingabewert von "prmopt()" als Int
    let amountInt = parseInt(prompt("Karten"), 10);
    //Erstelle Button
    let div = document.createElement("div");
    let sortButton = document.createElement("button");
    sortButton.innerText = "Sort";
    div.id = "button";
    div.appendChild(sortButton);
    //Füge Body Button hinzu    
    document.body.appendChild(div);
    //EventListener hinzufügen
    document.addEventListener("DOMContentLoaded", createCards);
    window.onload = function load() {
        document.getElementById("handcards").addEventListener("click", pushCard);
        document.getElementById("stack").addEventListener("click", pullCard);
        document.body.addEventListener("keydown", spacePull);
        document.getElementById("button").addEventListener("click", sort);
    };
    for (let i = 0; i < amountInt; i++) {
        //Zuffallswahl aus "Stack-Array"
        function randomPicking() {
            //Generiert Zufallswert zwischen "0" und "32"
            let y = Math.floor(Math.random() * stack.length);
            let pick = stack.splice(y, 1);
            handcards.push(pick[0]);
            return pick;
        }
        console.log("randomPicking1: " + randomPicking()[0]);
    }
    //Erstellt Handkarten
    function createCards() {
        for (let i = 0; i < handcards.length; i++) {
            let div = document.createElement("div");
            div.style.position = "relative";
            div.style.border = "solid pink";
            div.style.display = "inline-block";
            div.style.padding = "5%";
            div.style.left = "2%";
            div.style.width = "2%";
            div.appendChild(document.createTextNode(handcards[i]));
            document.getElementById("handcards").appendChild(div);
        }
    }
    function pushCard(_event) {
        //Target ermitteln 
        //Index von "Target-Text" ermitteln
        let target = _event.target;
        let handcardsindex = handcards.indexOf(target.textContent);
        console.log("handcardsindex: " + handcardsindex);
        console.log(target);
        //Spliced "handcard-array und pusht ins "filing-array""
        let hold = handcards.splice(handcardsindex, 1);
        filing.push(hold[0]);
        console.log(hold);
        console.log("filing" + filing);
        //Treibt Kind ab
        document.getElementById("handcards").removeChild(target);
        //Fügt dem "div id= "filing-arraywert" als Text zu
        let card = document.createTextNode(hold[0]);
        document.getElementById("filing").innerText = card.substringData(0, 3);
    }
    function pullCard(_event) {
        randomPicking();
        //Erstelle zusätzliche Handkarte und füge Sie zum "Handcards-div" hinzu
        let div = document.createElement("div");
        div.style.position = "relative";
        div.style.border = "solid pink";
        div.style.display = "inline-block";
        div.style.padding = "5%";
        div.style.left = "2%";
        div.style.width = "2%";
        div.appendChild(document.createTextNode(handcards[handcards.length - 1]));
        document.getElementById("handcards").appendChild(div);
    }
    function spacePull(_event) {
        if (_event.keyCode == 32) {
            pullCard(_event);
        }
    }
    function sort(_event) {
        console.log(_event);
        handcards.sort();
        console.log(handcards);
        //Entfernt"<div id="handcards"
        document.getElementById("handcards").remove();
        //Erstellt "<div id="handcards" neu
        let handdiv = document.createElement("div");
        handdiv.id = "handcards";
        handdiv.addEventListener("click", pushCard);
        document.body.appendChild(handdiv);
        createCards();
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=main.js.map