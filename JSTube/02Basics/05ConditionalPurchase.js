// User is only allowed to make a purchase when he is:
// logged In
// email verified
// card Info - Valid
// If any one is missing, stop the purchase

var isLoggedIn = true;
var isEmailVerified = false;
var cardinfo = true;

if(isLoggedIn){
    console.log("Logged In Success");
    if(isEmailVerified){
        console.log("Email is verified");
        if(cardinfo){
            console.log("You can make a purchase");
        }
    }
}

//Better way

if (isLoggedIn && isEmailVerified && cardinfo) {
    console.log("Allow user to make a purchase");
}else{
    console.log("You are not allowed to do that");
}