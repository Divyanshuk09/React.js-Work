import {configureStore} from '@reduxjs/toolkit'
import todoReducers from '../features/todo/TodoSlice' 
export const store = configureStore({
    reducer: todoReducers
})