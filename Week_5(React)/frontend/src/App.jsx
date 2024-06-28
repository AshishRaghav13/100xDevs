import { useEffect, useState } from "react"
import { CreateTodo } from "./components/CreateTodo"
import { Todos } from "./components/Todos"

function App() {
  const [todos, setTodos] = useState([]);
  

  // useEffect(async ()=>{
  //     const data = await fetch('http://localhost:3000/todos')
  //     const response = await data.json();
  //     setTodos(json.todos)
  // },[todos])
    // fetch("http://localhost:3000/todos")
    //   .then(async function(res){
    //     const json = await res.json();
    //     setTodos(json.todos);
    // })

  return (
    <div> 
      <CreateTodo/>
      <Todos todos={todos}/>
    </div>
  )
}

export default App
