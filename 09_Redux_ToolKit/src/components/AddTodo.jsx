import React, { useState } from "react";
import {useDispatch} from 'react-redux'
import { addTodo } from "../features/todo/TodoSlice";

function AddTodo() {

    const [input, setInput] = useState('');
    const dispatch = useDispatch()

    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }


  return (
    <form onSubmit={addTodoHandler} className="mt-12 w-full">
      <input
        type="text"
        className="bg-gray-800 rounded border w-[80%] border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900
        text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button type="submit" className="text-white  bg-blue-500 border-0 py-2 px-3 focus:outline-none hover:bg-blue-600 rounded text-md"
            >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
