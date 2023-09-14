import React, { createContext, useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './componts/Header'
import TodoList from "./componts/TodoList"
import CreateTodo from './componts/CreateTodo'
import Edit from './componts/Edit'
import { TodoProvider } from './TodoContext'
const App = () => {
  return (
    <Router>
      <TodoProvider>
      <Routes>
          <Route path='/' element={<Header/>}/>
          <Route path='/TodoList' element={<TodoList/>}/>
          <Route path='/Create' element={<CreateTodo/>}/>
          <Route path='/Edit/:Id' element={<Edit/>}/>
      </Routes>
      </TodoProvider>
    </Router>
  )
}

export default App