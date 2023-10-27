import { Action, Actions, State, Thunk } from "easy-peasy";

export interface Todo {
  text: string;
}

export interface TodosModel {
  todos: Todo[];
  addTodo: Action<this, Todo>;
  saveTodos: Thunk<this, Todo[]>;
}

export interface TodoActions extends Actions<{}> {
  addTodo: (todo: { text: string }) => void;
}

export interface StoreState extends State {
  todos: Todo[];
}
