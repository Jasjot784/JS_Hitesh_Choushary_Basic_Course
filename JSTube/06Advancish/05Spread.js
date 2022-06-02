//...args is both spread operator and rest operator it depends on usage where spread where rest 

var returnedValue = Math.max(2,5,7,4,2,9,8);
console.log(returnedValue);

var myObj = {};

Object.assign(myObj, {a:1, b:2, c:3},{z:9, y:8, x:7});
console.log(myObj);

function sumOne(a,b){
    return a+b;
}
console.log(sumOne(4,5,1));

var myA = [5,4];
console.log(sumOne(myA));
console.log(sumOne(...myA));// spread operator

function sumTwo(...args){//rest operator
    console.log(args);//opposite of spread
    //args means array coming up
    let sum = 0;
    for(const arg of args){
        sum = sum+arg;
    }
    return sum;
}

console.log(sumTwo(2,3,1,5,7));

//suppose we want to multiply first two and add rest

function sumThree(a,b,...arggs){
    console.log(arggs);
    let mult = a*b;
    let sum = 0;
    for(const arg of arggs){
        sum += arg;
    }
    return [sum,mult];
}

console.log(sumThree(2,3,1,1,1));