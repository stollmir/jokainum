function greeter(person: string) {
    return "Hello, " + person;
}

let user = prompt("Abfrage");

document.body.innerHTML = greeter(user);