// Falsy values
// undefined
// null
// 0
// ''
// NaN

// Anything other than above are truthy values

console.log("2"+2);//22

var user = "2";

if (2 == user) {
    console.log("Condition is true");  // it is printed becuase in js == means loosely equal to (It is known as coercion)
}
if (2 === user) {
    console.log("Condition is exactly true");
}