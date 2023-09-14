import React, { useContext, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { TodoFetcher } from '../App'
import { useTodo } from '../TodoContext'
import useForm from './useForm'
const CreateTodo = () => {
  const {changedescription,createSubmit,changeTitle,createTodo} = useTodo()
  const {formdata,HandleChange,HandleSubmit} = useForm({title:"",description:""},Validation)
  function Validation(formdata){
    if(formdata.title === ""){
      return false
    }
  }
  return (
    <div className="mainCreate">
      <h1>Create-Page</h1>
      <div className='Createcontainer'>
        <div className="title">
          <label htmlFor="title">Title: </label>
          <input type="text" name="" id="" value={createTodo.title} onChange={changeTitle} placeholder='enter the titile name'/>
        </div>
        <div className="description">
          <label htmlFor="description">description: </label>
          <input type="text" name="description" id="" value={createTodo.description} onChange={changedescription} placeholder='enter the decription value'/>
        </div>
        <Link to ="/TodoList"><button onClick={createSubmit} className='CreateButton'>submit</button></Link>
      </div>
    </div>
  )
}

export default CreateTodo
