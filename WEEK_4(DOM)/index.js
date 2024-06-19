// simple TODO using DOM   , uncomment button first 

let globalID = 1;
function markasDone(id){
    const parent = document.getElementById(id);
    parent.children[2].innerHTML = "Done"
}
// function createChild(title,desc,id){
//     const child = document.createElement("div");
//     const firstGrandChild = document.createElement("div");
//     firstGrandChild.innerHTML = title;
//     const secondGrandChild = document.createElement("div");
//     secondGrandChild.innerHTML = desc;
//     const thirdGrandChild = document.createElement("button");
//     thirdGrandChild.innerHTML = "Mark as done";

//     thirdGrandChild.setAttribute("onclick",`markasDone(${id})`);
//     child.appendChild(firstGrandChild);
//     child.appendChild(secondGrandChild);
//     child.appendChild(thirdGrandChild)
//     child.setAttribute("id",id)
//     return child;
// }
// function addTODO(){
//     const title = document.getElementById("title").value;
//     const description = document.getElementById("desc").value   ;
//     const parent = document.getElementById("container")
//     parent.appendChild(createChild(title,description,globalID++));
// }

// Update DOM according to state



function createChild(title,desc,id){
        const child = document.createElement("div");
        const firstGrandChild = document.createElement("div");
        firstGrandChild.innerHTML = title;
        const secondGrandChild = document.createElement("div");
        secondGrandChild.innerHTML = desc;
        const thirdGrandChild = document.createElement("button");
        thirdGrandChild.innerHTML = "Mark as done";
    
        thirdGrandChild.setAttribute("onclick",`markasDone(${id})`);
        child.appendChild(firstGrandChild);
        child.appendChild(secondGrandChild);
        child.appendChild(thirdGrandChild)
        child.setAttribute("id",id)
        return child;
}

function updateDomAcctoState(state){
    const parent = document.getElementById("container");
    parent.innerHTML = "";
    for(let i = 0;i<state.length;i++){
        const child = createChild(state[i].title,state[i].description,state[i].id)
        parent.appendChild(child);
    }
}

window.setInterval(async function(){
   const data = await fetch("https://sum-server.100xdevs.com/todos");
   const json = await data.json();
   updateDomAcctoState(json.todos)
},5000)

// updateDomAcctoState([{
//     title:"Ashish",
//     desc:"nothing",
//     id:121
// }])