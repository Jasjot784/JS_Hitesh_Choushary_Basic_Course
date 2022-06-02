var name = "Jasjot";

console.log("Line number 3",name);

function sayName() {
    //var name = "MR. J";
    console.log("Line number 7",name);
    sayNameTwo();

    function sayNameTwo() {
        //var name = "JS";
        console.log("Line Number 11",name);
    }
}

sayName();