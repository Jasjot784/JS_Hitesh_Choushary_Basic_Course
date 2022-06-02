console.log(name);  //undefined (it is not good for backend because we need proper error)
var name = "Jasjot";

console.log(name2); //error
let name2 = "Jasjot";

if(true){
    var lastName = "Singh";
    let lastName2 = "Singh";
}

console.log(lastName); //Singh becuase in javascript scope is not {}, but scope are functions
console.log(lastName2);// error, so let-> traditional scope, var-> js kind of scope