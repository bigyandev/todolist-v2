import React, {useState,useContext} from "react"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TodoContext from "../context/TodoContext";

import "./TodoList.css"


const TodoList = ({ title, deadline, completed, id}) => {
   
    const todayDate = new Date().getDate();
    const deadlineDate = (deadline.split("-")[2]);
    const remainingDays = deadlineDate - todayDate
    const {actions,todoArray} = useContext(TodoContext)

   console.log(todoArray)
    const handleEdit = (id) => {

    }

    const handleDelete = (id) => {
     actions.onDelete(id)
     console.log(id)
    }

    const handleStatus = (completed, id) => {
        actions.onStatusTodo(completed,id)
        console.log(todoArray)
       
    }
    
  
    return (
        <>
            <div className="todo">
                <div className="todo-title">
                    <input type="checkbox" checked={completed} onChange={(e) => handleStatus(e.target.checked, id)}/>
                    <h5>{title.toUpperCase()}</h5>
                </div>
                <div className="todo-icon">
                    <div className="deadline-button">
                        <button>{remainingDays > 0 ? remainingDays + " DAY" : "OVER"}</button>
                    </div>
                    <div className="todo-icons">
                        <div className="crud-icons">
                            <EditIcon color="primary" onClick={() => handleEdit(id)} />
                            <DeleteIcon color="error" onClick={() => handleDelete(id)}/>
                        </div>
                        <div className="deadline">
                            <h6>{deadline}</h6>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )

}
export default TodoList