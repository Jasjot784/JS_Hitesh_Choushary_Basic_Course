const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//console.log(window.getComputedStyle(red).backgroundColor);//in CSS it is background-color , so replcae - by Camel Case

const getBGColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
};

var orangeElementColor = getBGColor(orange);

orange.addEventListener('mouseenter',()=>{
    center.style.background = orangeElementColor;
});

const magicColorChanger = (element,color) => {
 return element.addEventListener('mouseenter',()=>{
    center.style.background = color;
});
};
magicColorChanger(red,getBGColor(red));