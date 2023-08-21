import React, { useState, useContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"

import TodoContext from "../context/TodoContext";
import TodoList from "./TodoList";

import "./TodoForm.css"




export const TodoForm = () => {
    const [select, handleSelect] = useState()
    const [title, setTitle] = useState("")
    const [deadline, setDeadline] = useState("")
    const { actions, todoArray } = useContext(TodoContext)
    const handleAdd = () => {
        if (title.length <= 0) {
            alert("enter title")
            setTitle(" ")
        }
        else if (!deadline) {
            alert("enter deadline")
            setDeadline(" ")
        }
        else {
            actions.onSubmit(title, deadline)
            setTitle("")
            setDeadline("")

        }
    }
    return (
        <div className="form-body">
            <div className="container">
                <div className="form-container">
                    <div className="header">
                        <input type="checkbox" checked="true"></input>
                        <h2>MY-Todos</h2>
                    </div>
                    <div className="main-body">
                        <input type="text"
                            className="title-input"
                            placeholder="WHAT TO DO?"
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}
                        />
                        <input type="date"
                            onChange={(e) => setDeadline((e.target.value))}
                            value={deadline} />
                        <Button onClick={handleAdd}
                            className="btn" varient="info">ADD</Button>
                    </div>
                    <hr style={{ color: "black", width: "95%" }} />
                    <div className="section">
                        FILTER:<select onChange={(e) => handleSelect(e.target.value)}>
                            <option value="ALL">ALL</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="NOT COMPLETED">NOT-COMPLETED</option>
                        </select>
                    </div>
                </div>
                <div className="todo-container">
                    {todoArray.map((todo) => {
                        if (select === "COMPLETED" && !todo.completed) {
                            return null
                        }
                        if (select === "NOT COMPLETED" && todo.completed) {
                            return null
                        }
                        return <TodoList key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            deadline={todo.deadline}
                        />

                    })}
                </div>
            </div>
        </div>
    )
}