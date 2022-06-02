
tipper("5");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill+5);
}
bigTipper("200");
function bigTipper(a) {     //If we write var bigTipper = function(a){} then error(bigTipper is not a function) because of rules of hoisting
    var bill = parseInt(a);
    console.log(bill+15);
}

console.log(name);
var name = "Jasjot"; //undefined

function sayName() {
    var name = "MR. J";
    console.log(name);
}
sayName();
console.log(name);
