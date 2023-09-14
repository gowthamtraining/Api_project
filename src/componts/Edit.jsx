import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useTodo } from '../TodoContext'
// import { TodoFetcher } from '../App'

const Edit = () => {
  const {changeEditDescription,changeEditTitle,updateTodo,EditTodo,setTodoId,GetIdTodo} = useTodo()
  useEffect(()=>{
    GetIdTodo()
  },[])
  const faram = useParams()
  const {Id}= faram
  console.log(Id)
  setTodoId(Id)
 
  return (
    <div className="mainCreate">
      <h1>Create-Page</h1>
      <div className='Createcontainer'>
        <div className="title">
          <label htmlFor="title">Title: </label>
          <input type="text" name="" id="" value={EditTodo.title} onChange={changeEditTitle} placeholder='enter the titile name'/>
        </div>
        <div className="description">
          <label htmlFor="description">description: </label>
          <input type="text" name="description" id="" value={EditTodo.description} onChange={changeEditDescription} placeholder='enter the decription value'/>
        </div>
        <Link to="/TodoList"><button className='CreateButton' onClick={updateTodo}>submit</button></Link>
      </div>
    </div>
  )
}
export default Edit
