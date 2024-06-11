import { nanoid, createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1,text: "Hello World!"}]
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state, action)=>{
            const todo={
                id:nanoid,
                text: action.payload.text
            }
            state.todos.push(todo)
        },
        updateTodo: (state, action) => {
            const {id, text} = action.payload
            const todo = state.todos.find((todo) => todo.id === id)
            if (todo){
                todo.text = text
            }
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload.id)
        }
    }
})

export const {addTodo, removeTodo, updateTodo} =todoSlice.actions

export default todoSlice.reducer;