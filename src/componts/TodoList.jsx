import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom"
import "./style.css"
import { TodoFetcher } from '../App'
import moment from "moment"
import { useTodo } from '../TodoContext'
import useCounter from './useCounter'
const TodoList = () => {
  const {list,GetTodos,TodoDelete,changeComplete,isloading} = useTodo()
  const [lastSeenTimestamp, setLastSeenTimestamp] = useState(getInitialTimestamp());
  useEffect(()=>{
    GetTodos()
  },[])
  const {count,IncrementCounter,DecrementCounter} = useCounter()
  useEffect(() => {
    const intervalId = setInterval(() => {
      setLastSeenTimestamp(getCurrentTimestamp());
    }, 60000); // 60000 milliseconds = 1 minute
    return () => {
      clearInterval(intervalId);
    };
  }, [lastSeenTimestamp]);
  function getInitialTimestamp() {
    return getCurrentTimestamp();
  }
  function getCurrentTimestamp() {
    return moment()
  }
  return (
    isloading ? (
      <p>"loading"</p>
    ):
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
              <th><Link to={`/Edit/${item._id}`}><button>edit</button></Link></th>
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
      <div className="FormattedTimeAgo"><p>Last seen: {lastSeenTimestamp.fromNow()}</p></div>
    </div>
    // <h1></h1>
  )
}

export default TodoList
