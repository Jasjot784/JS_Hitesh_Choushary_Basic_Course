var user = {
    firstName : "Jasjot",
    lastName : "Singh",
    role : "Admin",
    loginCount : 32,
    facebookSignedIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function (){
        return `${this.firstName} is enrolled in  total of ${this.courseList.length} courses`
    }
};

var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());

user.buyCourse("React JS Course");
user.buyCourse("Angular Course");
console.log(user.getCourseCount());