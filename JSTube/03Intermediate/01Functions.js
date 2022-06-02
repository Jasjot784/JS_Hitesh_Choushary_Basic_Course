function sayHello(name) {
    console.log("Hello there, Jasjot");
    console.log("Hello there, "+name);
    console.log(`Hello there, ${name}`);
}

sayHello();// Calling a function
sayHello; // referencing a function

sayHello("Jasjot");

function namstey() {
    return "Hello in India!";
}

namstey();

var greetings = namstey();// functional programming i.e treat function like variable
console.log(greetings);
console.log(namstey());