//fetch gives promise
// fetch("https://api.chucknorris.io/jokes/random")
// .then(response =>{
//     console.log("API: ",response.json());// run it on browaser not here vs code
// })
// .catch()

//fetch gives promise
fetch("https://api.chucknorris.io/jokes/random")
.then(response =>{
    return response.json();// run it on browaser not here vs code
})
.then((data)=>{
   // console.log("DATA is:",data);
   var joke = data.value;
   console.log("JOKE:",joke);
})
.catch()

//next then will have something which previous then returns