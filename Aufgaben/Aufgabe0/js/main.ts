
    function greeter() {
        let name: string = prompt("Abfrage", "");
        if (name != null) {
            document.getElementById("Greet").innerHTML =
                "hey " + name;
                console.log ( "hey" + name );
        }
}