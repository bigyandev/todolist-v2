import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "react-bootstrap"

import "./TodoForm.css"


export const TodoForm = () => {
    return (
        <div className="form-body">
            <div className="container">
                <div className="header">
                    <input type="checkbox" checked="true"></input>
                    <h2>MY-Todos</h2>
                </div>
                <div className="main-body">
                    <input type="text" placeholder="WHAT TO DO?"></input>
                    <input type="date"></input>
                    <Button className="btn" varient="info">ADD</Button>
                    <hr style={{backgroundColor: "black"}} />
                </div>
              
                <div className="section">
                    FILTER:<select>
                        <option value="ALL">ALL</option>
                        <option value="COMPLETED">COMPLETED</option>
                        <option value="NOT COMPLETED">NOT-COMPLETED</option>
                    </select>
                </div>
            </div>
        </div>
    )
}