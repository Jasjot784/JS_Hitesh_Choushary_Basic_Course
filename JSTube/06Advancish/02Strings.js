//Template Strings

var name = "Jasjot"; //Usual way(not recommended)
var name2 = `Jasjot's"s`; // in double quotes we need to escape
var fullName = `${name2} Singh`;

console.log(fullName);
console.log(fullName.charAt(0));
console.log(fullName.endsWith("h"));
console.log(fullName.includes("Singh"));
console.log(fullName.toLowerCase());
