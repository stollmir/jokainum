var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let fieldsets = document.getElementsByTagName("fieldset");
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", order);
        }
    }
    function order(_event) {
        console.log(_event);
        //*
        let target = _event.target;
        console.log("Changed " + target.name + " to " + target.value);
        let iceCreams = document.createElement("p");
        iceCreams.innerText = target.value;
        document.getElementById("order").appendChild(iceCreams);
    }
    // function ConeSundae(_event: Event) {
    //  let target: HTMLInputElement = <HTMLInputElement>_event.target;
    //console.log("Changed " + target.name + " to " + target.value);
    //}
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=main.js.map