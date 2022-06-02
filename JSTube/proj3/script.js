const courses = [
    {
        name : "Complete React JS Course",
        price : "2.3"
    },
    {
        name : "Complete Angular Course",
        price : "2.1"
    },
    {
        name : "Complete MERN Course",
        price : "2.7"
    },
    {
        name : "Complete C++ Course",
        price : "2.8"
    }
];

function generateLIST(){
    const ul  = document.querySelector(".list-group"); //selects ul in html go check code
    ul.innerHTML = ""; //everytime we call generate list it first removes previous values
    courses.forEach((course)=>{
        const li = document.createElement("li"); //adds<li></li> to html
        li.classList.add("list-group-item");

        const name = document.createTextNode(course.name); // Text Node added
        li.appendChild(name);

        const span = document.createElement("span");
        span.classList.add("float-right");

        const price = document.createTextNode("$ " + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    });

}

//generateLIST();

window.addEventListener("load",generateLIST);

const button = document.querySelector(".sort-btn");

button.addEventListener("click",()=>{
    courses.sort((a,b)=>a.price-b.price);
    generateLIST();
});
