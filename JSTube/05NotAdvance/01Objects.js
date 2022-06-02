//functional approach of defining objects(recommended)
var User = function(firstName,courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function(){
        console.log(`Course count is ${this.courseCount}`);
    };
}

var jasjot = new User("jasjot",2);//when we use new keyword it is not a regular function call so understand this in such manner
console.log(jasjot);

var sam = new User("Sam",1);
console.log(sam);


//use of proto
jasjot.getCourseCount();
sam.getCourseCount();

//we want to have getFirstName kind of thing without changing original

User.prototype.getFirstName = function(){
    console.log(`Your first name is : ${this.firstName}`);
};

if(jasjot.hasOwnProperty("firstName")){
    jasjot.getFirstName();
}

sam.getFirstName();