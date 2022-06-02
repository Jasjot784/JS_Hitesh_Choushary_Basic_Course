const jasjot = {
    firstName : "Jasjot",
    lastName : "Singh",
    role : "Admin",
    courseCount : 3,
    getInfo : function(){
        console.log(`
        First name is ${this.firstName}
        Last name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} courses
        `);
    }
};

const dj = {
    firstName : "Rock",
    lastName : "DJ",
    role : "Sub-Admin",
    courseCount : 4
};

jasjot.getInfo();
//dj.getInfo();//error

//Borrowing a methid using bind
var djInfo = jasjot.getInfo.bind(dj);
djInfo();

jasjot.getInfo.call(dj);