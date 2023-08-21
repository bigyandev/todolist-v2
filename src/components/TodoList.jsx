import React, { useState, useContext } from "react"

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import TodoContext from "../context/TodoContext";

import "./TodoList.css"


const TodoList = ({ title, deadline, completed, id, }) => {

    const [editBtnClicked, setEditBtnClicked] = useState(false)
    const [editText, setEditText] = useState(title)
    const todayDate = new Date().getDate();
    const deadlineDate = (deadline.split("-")[2]);
    const remainingDays = deadlineDate - todayDate
    const { actions, todoArray } = useContext(TodoContext)

    const handleEdit = () => {
        setEditBtnClicked(() => !editBtnClicked)
       
        
    }
    
    const saveEditedText = (id, editedTitle) => {
       setEditBtnClicked(() => !editBtnClicked)
       actions.onEdit(id, editedTitle)
    }

    const handleDelete = (id) => {
        actions.onDelete(id)
        console.log(id)
    }

    //completed or not completed checkbox toggle
    const handleStatus = (completed, id) => {
        actions.onStatusTodo(completed, id)
    }
    return (
        <>
            <div className="todo">
                <div className="todo-title">
                    <input type="checkbox"
                        checked={completed}
                        onChange={(e) => handleStatus(e.target.checked, id)} />
                    {editBtnClicked ? <input className="edit-input"
                        value={title}
                        onChange={(e) => handleEdit(id, e.target.value)}
                        type="text" />
                        : <h5>{title}</h5>}
                </div>
                <div className="todo-icon">
                    <div className="deadline-button">
                        <button>{remainingDays > 0 ? remainingDays + " DAY" : "OVER"}</button>
                    </div>
                    <div className="todo-icons">
                        <div className="crud-icons">
                            {editBtnClicked ? <DoneOutlineIcon
                                color="primary"
                                onClick={() => saveEditedText(id,editText)} /> :
                                <EditIcon
                                    color="primary"
                                    value={editText}
                                    onChange={(e) => setEditText(e.target.value)}
                                    onClick={() => handleEdit()} />}
                            <DeleteIcon
                                color="error"
                                onClick={() => handleDelete(id)} />
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