import { createContext, useContext, useState } from "react";

const TodoContext = createContext()
export const TodoProvider=({children})=>{
    const [isloading,setLoading] =useState(true)
    const [list,setList] = useState([])
    const[todoId,setTodoId] = useState(0)
    const [EditTodo, setEditTodo] = useState({ title:"", description: "" })
    const [createTodo, setCreateTodo] = useState({title:"", description: "" })
    const GetTodos=()=>{
        setLoading(false)
        const url = "https://freeapi-app-production-5e31.up.railway.app/api/v1/todos"
        fetch(url).then(res=>res.json()).then(res=>setList([...res.data])).catch((error)=>{
          console.log(error)
          setLoading(false)
        })
    }
    function changeEditDescription(e) {
            setEditTodo({ ...EditTodo, description: e.target.value })
    }
    function changedescription(e) {
        setCreateTodo({ ...createTodo, description: e.target.value })
      } 
    function updateTodo(){
        const url = `https://freeapi-app-production-5e31.up.railway.app/api/v1/todos/${todoId}`
        fetch(url,{
          method:"PATCH",
          body:JSON.stringify(EditTodo),
          headers:{"Content-Type":"application/json"}
        }).then(()=>GetTodos())
        setEditTodo({title:"",description:""})
      }
    function changeEditTitle(e){
        setEditTodo({...EditTodo,title:e.target.value})
      }
    function changeTitle(e) {
            setCreateTodo({ ...createTodo, title: e.target.value })
          }
    function createSubmit() {
            const url = "https://freeapi-app-production-5e31.up.railway.app/api/v1/todos"
            fetch(url, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(createTodo)
            }).then(GetTodos())
            setCreateTodo({ title: "", description: "" })
          }
    function TodoDelete(id){
            const url = `https://freeapi-app-production-5e31.up.railway.app/api/v1/todos/${id}`
            fetch(url,{
              method:"DELETE",
              headers:{"Content-Type":"application/json"}
            }).then(()=>GetTodos())
            
    }
      const GetIdTodo=()=>{
        const url = `https://freeapi-app-production-5e31.up.railway.app/api/v1/todos/${todoId}`
        fetch(url).then(res=>res.json()).then(res=>setEditTodo({...res.data}))
    }
    function changeComplete(id){
        const url = `https://freeapi-app-production-5e31.up.railway.app/api/v1/todos/toggle/status/${id}`
        fetch(url,{
          method:"PATCH",
          headers:{"Content-Type":"application/json"}
        })
      }
    return (
        <TodoContext.Provider value={{list,isloading,setEditTodo,GetTodos,changedescription,createSubmit,changeTitle,createTodo,setCreateTodo,todoId,TodoDelete,changeComplete,changeEditDescription,changeEditTitle,updateTodo,EditTodo,setTodoId,GetIdTodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export const useTodo =()=>{
    return useContext(TodoContext)
}

