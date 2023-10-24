import TodoContext from "../Context/TodoContext";
import { useContext } from "react";

function TaskCount() {
    const {listed:toBeCount} = useContext(TodoContext)
    return ( 
        <div className="taskcount container">
            <h1>Task Count {toBeCount.length}</h1>
        </div>
     );
}

// TaskCount.defaultProps = {
//     toBeShown: []
// }

export default TaskCount;