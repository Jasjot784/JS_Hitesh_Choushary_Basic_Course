var num1 = 7;
var num2 = 6;

console.log(num1+num2);
console.log(num1*num2);

var answer = num1>num2;

console.log(answer);

var sellingPrice = 199;
var listPrice = 799;

var discountPercent = ((listPrice-sellingPrice)/listPrice)*100;

console.log(discountPercent); //75.09386.....

displayDiscountPercent = Math.round(discountPercent);

console.log(displayDiscountPercent);//75

var result = listPrice>sellingPrice;
console.log(typeof result);

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence