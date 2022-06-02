const google = "google";
const fb = null;

if(google){
    console.log("I execute Block-I");
}

if(!!fb){   // 2 exclamation marks make it false from falsy because we want in production true or false not truthy or falsy
    console.log("I execute Block-II");
}