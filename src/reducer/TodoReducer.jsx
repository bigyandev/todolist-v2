import React from "react"
import { Actions } from "./type"

export const newTodo = (title, deadline) => {
    return { id: new Date().getSeconds() * Math.random(), title: title, deadline: deadline, completed: false }
}

export const reducer = (todo, action) => {
    switch (action.type) {
        case Actions.ADD_TODO:
            return [...todo, newTodo(action.payload.title, action.payload.deadline)]

        case Actions.DELETE_TODO:
            const filteredTodo = todo.filter((todo) => todo.id !== action.payload.id)
            return filteredTodo

        case Actions.STATUS_TODO:
            return todo.map((todo) => todo.id === action.payload.id ? (
                { ...todo, completed: action.payload.completed }) : todo)

        case Actions.EDIT_TODO:
            return todo.map((todo) => todo.id === action.payload.id ? (
                { ...todo, title: action.payload.title }) : todo)
                
        default:
            return todo
    }
}
export const TodoReducer = () => {

}