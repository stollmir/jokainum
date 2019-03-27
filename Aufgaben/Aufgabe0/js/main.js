function greeter() {
    let name = prompt("Abfrage", "");
    if (name != null) {
        document.getElementById("Greet").innerHTML =
            "hey " + name;
        console.log("hey" + name);
    }
}
//# sourceMappingURL=main.js.map