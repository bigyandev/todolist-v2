import React, {useReducer,useEffect} from "react"

import  { TodoForm }  from './components/TodoForm';
import { getTodo } from "./helper/LocalStorage";
import { reducer } from "./reducer/TodoReducer";

import './App.css';

import TodoAction from "./reducer/TodoAction";
import TodoContext from "./context/TodoContext";



function App() {
const [todoArray, dispatch] = useReducer(reducer, getTodo())
const actions = TodoAction(dispatch)

useEffect(() => {
    localStorage.setItem("todo",JSON.stringify(todoArray))
},[todoArray])

 return (
     <TodoContext.Provider value={{actions,todoArray}}>
      <TodoForm />
      </TodoContext.Provider>
 )
}

export default App;
