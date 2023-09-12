import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import "./style.css"
import { TodoFetcher } from '../App'
import moment from "moment"
import { useTodo } from '../TodoContext'
const TodoList = () => {
  const {list,GetTodos,TodoDelete,getEditData,changeComplete} = useTodo()
  useEffect(()=>{
    GetTodos()
  },[])
  return (
    <div className="todo-container">
      <table className="table-container">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>isComplete</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {list.map((item)=>{
          return(
            <tr>
            <th>{item.title}</th>
            <th>{item.description}</th>
            <th><input type="checkbox" name="" id="" checked={item.isCompleted} onChange={()=>changeComplete(item._id)}/></th>
            <th className='ListButton'>
              <th><Link to="/Edit"><button onClick={()=>getEditData(item._id)}>edit</button></Link></th>
              <th><button onClick={()=>TodoDelete(item._id)}>delete</button></th>
            </th>
          </tr>
          ) 
        })}
      </tbody>
    </table>
    <div className="createButton">
      <Link to="/Create"><button className=''>Create-Todo</button></Link>
      </div>
      {/* <div className="FormattedTimeAgo">{formattedDateTimeAgo}</div> */}
    </div>
    // <h1></h1>
  )
}

export default TodoList
