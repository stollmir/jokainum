namespace Aufgabe4 {

    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", order);

        }
    }

    function order(_event: Event): void {
        console.log(_event);
        //*
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        console.log("Changed " + target.name + " to " + target.value);

        let iceCreams = document.createElement("p");
        iceCreams.innerText = target.value;
        document.getElementById("order").appendChild(iceCreams);
    }


    
   // function ConeSundae(_event: Event) {
      //  let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //console.log("Changed " + target.name + " to " + target.value);


    //}
}
