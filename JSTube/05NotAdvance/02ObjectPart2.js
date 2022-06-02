//Objects from MDN (Mozilla Develo....)

var User = {
    name : "",
    getUserName : function(){
        console.log(`User name is ${this.name}`);
    }
};

var jasjot = Object.create(User);
console.log(jasjot);

jasjot.name = "Jasjot Singh";
jasjot.getUserName();

var sam = Object.create(User,{
    name :{value:"sammy"},
    courseCount :{value:3}
})

sam.getUserName();