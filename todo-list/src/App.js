
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from './MyComponents/Todos';
import React, { useState } from 'react';



function App () {
 const onDelete = (todo)=>{
  console.log("I am onDelete of todo", todo);
  
 
  setTodos(todos.filter((e)=>{
     return e!== todo
  }));
  const [Todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the Market",
     desc: "You need to go to the market to get this job done"
      
    },
     {
    sno: 2,
    title: "Play Soccer",
   desc: "You need to play soccer to stay fit "
    },
    {
      sno: 3,
      title: "Esports Tournament",
     desc: "Hope for the best"
    },
  ]);
  return (
 <>
<Header title="My Todos List" searchBar= {false}/>

<Todos todos={Todos} onDelete={onDelete}/>
<Footer/> 
</>
   );
}
export default App;

