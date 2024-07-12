import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    completeTodo: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: true } : todo
      );
    },
  },
});

export const { addTodo, removeTodo, updateTodo, completeTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
