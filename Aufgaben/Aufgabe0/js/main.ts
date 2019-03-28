function greeter(person: string) :string {
    return "hey " + person;
}
let user: string = prompt("Abfrage");
console.log(greeter(user));
document.body.innerHTML = greeter(user);