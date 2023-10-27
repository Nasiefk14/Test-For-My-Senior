import { action, thunk } from "easy-peasy";
import { TodosModel } from "../interface";

const todosStore: TodosModel = {
  todos: [],
  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),
  saveTodos: thunk((_actions, todosToSave) => {
    console.log(
      `Imagine were sending ${todosToSave.length} todos to a remote server..`
    );
  }),
};

export default todosStore;
