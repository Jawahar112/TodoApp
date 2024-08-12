
import { useEffect, useState } from 'react';
import './App.css'
import axios from 'axios';
function App() {
const [tasks,settasks]=useState([])
const [text,settext]=useState("")
const headers={
Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVc2VySWQiOiI2NmEyMjFlYWE2ZTJmNjNiYzVkMTAwYzciLCJpYXQiOjE3MjM0NjQxODMsImV4cCI6MTcyMzQ4MjE4M30.9X9TSYAjzApcXpOKVyEimKsh4wxJXPFXfGJZFwxh2KY"
}
function gettasks(){
 axios.get("http://localhost:3000/api/tasks",{headers:headers}).then((res)=>{

  settasks(res.data.tasks)
})
   }
   useEffect(()=>{
gettasks()
   },[])
   function submitHandler(){
axios.post("http://localhost:3000/api/tasks",{Task:text,Time:"2024-08-12T20:46:00.000Z",Category:"Fitness"},{headers:headers})
.then((res)=>{
settext("")
if(!res.data.status){
  return alert("task add falied");
 }
 if(tasks && tasks.length){
   settasks([...tasks,res.data.addedTodo])
  }
  else{
    settasks([res.data.addedTodo])
  }
 })
   }
 async function deleteHandler(id){
    const deleteTask=await axios.delete(`http://localhost:3000/api/delete/${id}`,{headers:headers})
   if(!deleteTask){
    alert("task deletion failed")
   }
 
  
   
settasks(tasks.filter((data)=>{
  return data._id!==deleteTask.data.deletedTask.Todos[0]._id
}))
  }
  return (
    <>
  
  <h1>Your Tasks</h1>
   <ul>

  {tasks && tasks.length>0 ?
    tasks.map((data,index)=>{
      return   <li key={index}>{data?.Task}  Time  {data?.Time} <button onClick={()=>{deleteHandler(data._id)}}>delete</button></li>
    }):"No Tasks :("
   }
  </ul>
  <input type='text' value={text} placeholder='Enter Task' onChange={(e)=>{settext(e.target.value)}}/>
  
 <button onClick={submitHandler}>Add Task</button>
    </>
  )
}

export default App
