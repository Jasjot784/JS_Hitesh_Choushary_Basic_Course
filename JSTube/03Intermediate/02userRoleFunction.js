/*
Define a function that can answer the role of a user.
A user can be on following roles:
admin - with all access
subadmin - with access to create/delete courses
testprep - with access to create/delete tests
user - consume all content
other - trial user

Input: getUserRole(name,role)
*/
//if we write var getUserRole = (name,role)=>{} it becomes aero function

function getUserRole(name,role) {// we can also write var getUserRole = function(name,role){ (Functional programming way)
    switch (role) {
        case "admin":
            return `${name} is admin with all access`;
        case "subadmin":
            return `${name} is subadmin with access to create and delete courses`;
        case "testprep":
            return `${name} is testprep with access to create and delete tests`;
        case "user":
            return `${name} is a user with access to consume content`;            
        default:
            return `${name} is a trial user`; 
    }
}

getUserRole("Jasjot","testprep");

console.log(getUserRole("Jasjot","testprep"));