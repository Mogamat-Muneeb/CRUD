let fruit = JSON.parse(localStorage.getItem("fruit"))
? JSON.parse(localStorage.getItem("fruit"))
:[];
  

function readFruit(fruit){
   document.querySelector("#fruit").innerHTML = "";

   fruit.forEach((fruit,position) => {
   document.querySelector("#fruit").innerHTML +=`
    <li>
    ${fruit.name} taste ${fruit.taste}
    <div class="content">
    <div  class="buttons">
    <button  class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#update-modal-${position}">UPDATE</button>
    <button  class="btn btn-danger" onclick="deleteFruit(${position})">DELETE</button>
    </div>
    </div>
   
    
    </li>

    <div class="modal fade" id="update-modal-${position}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input type="text" id="update-input-${position}" value="${fruit.name} "/>
        <select name="taste" id="update-input-taste-${position}">
       <option value="sour">sour</option>
       <option value="sweet">sweet</option>
       <option value="bitter">bitter</option>
   </select>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-dark" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#update-modal-${position}" onclick="updateFruit(${position})">Save changes</button>
      </div>
    </div>
  </div>
</div>
   `;
   });
}

readFruit(fruit);

function createFruit(){
    let newfruit = document.querySelector("#add").value;
    let taste = document.querySelector("#taste").value;
   
    try{
        if(newfruit =="") throw "Please enter a fruit name..."
        fruit.forEach(individual =>{
            if(individual == newfruit)throw "That fruit name already exists..."
        })
        console.log(fruit);

        fruit.push({
            name:newfruit,
            taste,
        });
       localStorage.setItem("fruit",JSON.stringify (fruit));
        readFruit(fruit);
    } catch(err){
        alert(err)
    }
   
}

function deleteFruit(position){
    fruit.splice(position, 1)
    localStorage.setItem("fruit",JSON.stringify (fruit));
    readFruit(fruit);
}

function updateFruit(position){
    let fruits =document.querySelector(`#update-input-${position}`).value;
    let taste =document.querySelector(`#update-input-taste-${position}`).value;
    
    try{
        if(fruits ===""){
            throw new Error("please enter a fruit name")
        }
        fruit[position]={
            name:fruits,
            taste,
        };
        localStorage.setItem("fruit",JSON.stringify (fruit));
        readFruit(fruit);
    }catch(error){
        alert(error)
    }
    }
  
   