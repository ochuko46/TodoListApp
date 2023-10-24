import { createContext, useState } from "react";
// import {v4} from "uuid";
// import TodoForm from "../components/TodoForm";


//Context
const TodoContext = createContext()

//Provider
export const TodoProvider = ({children}) =>{
  const [listed,setListed] = useState([]);
  
  const todoDeletedHandler = (toDelete) => {
    if(window.confirm("Are you sure?")) {
      setListed(listed.filter((item)=> item.id !== toDelete))
    }
  }

  const toBeDoneWork = (addToList) => {
    setListed([addToList,...listed])
  }
    

    const contextObj = {
        // myStud:students,
        toBeDoneWork,
        todoDeletedHandler,
        listed
    }

    return <TodoContext.Provider value={contextObj}>
        {children}
    </TodoContext.Provider>
}

export default TodoContext;