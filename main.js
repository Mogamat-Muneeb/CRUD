let fruit = [
    "Berries",
    "Apple",
    "Watermelon",
    "Orange",
    "Guava",
    "Banana",
    "Coconut",
    "Mango",
    "Lemon",
    "Cherry ",
];

function readFruit(fruit){
   document.querySelector("#fruit").innerHTML = "";

   fruit.forEach((fruit,position) => {
   document.querySelector("#fruit").innerHTML +=`
    <li>
    ${fruit} 
    <button onclick="updateFruit(${position})">UPDATE</button>
    <button onclick="deleteFruit(${position})">DELETE</button>
    
    </li>
   `;
   });
}

readFruit(fruit);

function createFruit(){
    let newfruit = document.querySelector("#add").value;
    try{
        if(newfruit =="") throw "wrong"
        fruit.forEach(individual =>{
            if(individual == newfruit)throw "already here"
        })
        console.log(fruits);


        fruit.push(newfruit);
        readFruit(fruit);
    } catch(err){
        alert(err)
    }
   
}

function deleteFruit(position){
    fruit.splice(position, 1)
    readFruit(fruit);
}

function updateFruit(position){
    let fruits = prompt("proper fruit name fool");
    console.log(fruits);
    fruit[position]= fruits;
    readFruit(fruit);
}