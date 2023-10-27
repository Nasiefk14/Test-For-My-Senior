import { action, thunk } from "easy-peasy";
import { TodosModel } from "../interface";

const todosStore: TodosModel = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
};

export default todosStore;
