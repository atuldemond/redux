import { configureStore } from "@reduxjs/toolkit";
import todoReducer, {
  addTodo,
  removeTodo,
  completeTodo,
  updateTodo,
} from "./slices/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

store.dispatch(
  addTodo({
    id: 1,
    title: "React Redux and Toolkit",
    description: "complete Todo funanalities with redux toolkit",
    completed: false,
  })
);
store.dispatch(
  updateTodo({
    id: 1,
    title: "React Redux and Toolkit",
    description:
      "complete Todo funanalities with redux toolkit and i am updating my values",
    completed: false,
  })
);
store.dispatch(completeTodo({ id: 1, completed: true }));

store.dispatch(removeTodo(1));
