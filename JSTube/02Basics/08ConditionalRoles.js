// Create an apllication with following roles:
// admin - gets full access
// subadmin - gets access to create/delete courses
// testprep - gets access create/delete tests
// user - gets access to consume content

var user = "testprep";

switch (user) {
    case "admin":
        console.log("You get full access");
        break;
    case "subadmin":
        console.log("gets access to create/delete courses");
        break;
    case "testprep":
        console.log("gets access to create/delete tests");
        break;
    case "user":
        console.log("gets access to consume content");
        break;
    default:
        console.log("Trial User");
        break;
}