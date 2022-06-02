const uno = ()=>{
    return "I am One";
}

const dos = ()=>{
    setTimeout(()=>{
        return "I am Two";
    },3000);
    
}

const dos2 = async()=>{
    setTimeout(()=>{
        return "I am Two";
    },3000);
    
}

const dos3 = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("I am Two");
        },3000);
    });
}

const Tres = ()=>{
    return "I am Three";
}

const callMe = ()=>{
    let valOne = uno();
    console.log(valOne);

    let valTwo = dos();
    console.log(valTwo);

    let valTwo2 = dos2();
    console.log(valTwo2);

    let valThree = Tres();
    console.log(valThree);

}

callMe();

const callMe2 = async()=>{
    let valOne = uno();
    console.log(valOne);

    let valTwo =await dos3();
    console.log(valTwo);

    let valThree = Tres();
    console.log(valThree);

}

callMe2();// if instead reject a big error 