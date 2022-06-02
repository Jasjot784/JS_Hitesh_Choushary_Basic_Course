//Destructuring the data

const user = ["jasjot",3,"admin"];
// var role = user[2];
// var name = user[0];

//var[name, courseCount, role] = user;

//console.log(role);

const MyUser = {
    name : "jasjot",
    courseCount : 5,
    role : "admin"
};

// const {name, myCourseCount, role} = MyUser;
// console.log(myCourseCount);//undefined

const {name, courseCount, role} = MyUser;
console.log(courseCount);