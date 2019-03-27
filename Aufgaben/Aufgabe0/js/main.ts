function greeter(person: string) {
    return "hey " + person;
}

let user = prompt("Abfrage");
console.log(greeter(user));

document.body.innerHTML = greeter(user);