import TodoDisplay from "./TodoDisplay";
import TodoContext from "../Context/TodoContext";
import { useContext } from "react";



function TodoList() {
    const {todoDeletedHandler,listed:toBeShown} = useContext(TodoContext)
    return (
        <div className="container">
            {toBeShown.map((item) => <TodoDisplay todoDeletedHandler={todoDeletedHandler} key={item.id} beShown={item}/>)}
        </div>
     );
}

export default TodoList;