var testArray = [2,4,6,3,1,5,9,8];
console.log(testArray.fill("j"));
console.log(testArray.fill("h",2));
console.log(testArray.fill("k",2,5)); //start range inclusive end range exclusive

const myNumber = [23,24,25,55,66,77,87,98];

const result = myNumber.filter((num)=>num!=55);
console.log(result);

var users = ["Ted","Tim","Ton","Sam","Sor","Sod"];
//Slicing
console.log(users.slice(1,3));//start range inclusive end range exclusive
console.log(users.slice(1));

//Splicing
users.splice(1,3,"Hi");// Instead of 1 to 3 write Hi
console.log(users);
users.splice(1,3,"GO","Bye");
console.log(users);