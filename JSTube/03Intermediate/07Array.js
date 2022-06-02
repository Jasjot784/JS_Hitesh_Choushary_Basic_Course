var countries = ["India","USA","Japan","Russia"];

var states = new Array("Rajasthan","Delhi","Mumbai","Assam");

console.log(states);
console.log(states[0]);
console.log(states.length);

//Replace
states[0] = "Punjab";
console.log(states);

var user = ["Jasjot","jasjot784@gmail.com",3,34,true];
console.log(user);

//delete from last
user.pop();
console.log(user);

//add at front
user.unshift("NEW VALUE");
console.log(user);

//delete from front
user.shift();
console.log(user);

console.log(user.indexOf(3));
console.log(user.indexOf("newyyy"));

//Shortcut to create array
console.log(Array.from("Jasjot"));