import React from 'react'
import { Router as BrowserRouter, Routes, Route,Link } from "react-router-dom"
import "./style.css"
const Header = () => {
  return (
    <div className='container'>
        <div className="wraper">
        <div className="static-text">Hello </div>
        <ul className='dynamic-text'>
            <li><span>everyone</span></li>
            <li><span>goodmoring</span></li>
        </ul>
        </div>
      <Link to={"/TodoList"}><button>Todo-List</button></Link>
    </div>
  )
}

export default Header
