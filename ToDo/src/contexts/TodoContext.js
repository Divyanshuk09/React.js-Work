import React, { createContext, useContext } from 'react'

export const TodoContext = createContext({
    todos: [{
        id: 1,
        todo: "Todo 1",
        checked: false,
    }],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})
export const useTodo = () => {
    return useContext(TodoContext)
}

export const Todoprovider = TodoContext.Provider
