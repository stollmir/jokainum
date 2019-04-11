//let p = document.createElement("p");
//p.appendChild(document.createTextNode("kfdjdfkdsf"));
//console.log(p);
//document.body.appendChild(p);



//let log = document.createElement('div');
//log.style 

//log.textContent = "fiodsfjkl";
//document.body.appendChild(log);
//console.log(log);
let tack: string[] = ["♥7", "♥8", "♥9", "♥10", "♥J", "♥D", "♥K", "♥A", "♦7", "♦8", "♦9", "♦10", "♦J", "♦D", "♦K", "♦A", "♣7", "♣8", "♣9", "♣10", "♣J", "♣D", "♣K", "♣A", "♠7", "♠8", "♠9", "♠10", "♠J", "♠D", "♠K", "♠A",];

document.body.onload = addElement;

function addElement () { 
  // erstelle ein neues div Element
  // und gib ihm etwas Inhalt
  var newDiv = document.createElement("div"); 
  var newContent = document.createTextNode(tack[7]); 
  newDiv.appendChild(newContent); // füge den Textknoten zum neu erstellten div hinzu.

  // füge das neu erstellte Element und seinen Inhalt ins DOM ein
  var currentDiv = document.getElementById("div1"); 
  document.body.insertBefore(newDiv, currentDiv); 
}