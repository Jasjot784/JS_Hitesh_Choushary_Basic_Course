const uno = ()=>{
    console.log("i am One");
}

const dos = ()=>{
    setTimeout(()=>{
        console.log("Wooohooo");
    },3000);
    console.log("i am Two");
}
const Tres = ()=>{
    console.log("i am three");
}

uno();

dos();
Tres();