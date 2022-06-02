const User = require("./06ClassJs.js");

const jasjot  = new User("jasjot","jasjot784@gmail.com");
console.log(jasjot.getInfo());

jasjot.enrollCourse("React Bootcamp");
jasjot.enrollCourse("Angular Bootcamp");

console.log(jasjot.getCourseList());

let courses = jasjot.getCourseList();
courses.forEach((c)=>console.log(c));