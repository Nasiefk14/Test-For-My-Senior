import { Action, Actions, State } from "easy-peasy";

export interface Todo {
  text: string;
}

export interface TodosModel {
  todos: Todo[];
  addTodo: Action<this, Todo>;
}

export interface TodoActions extends Actions<{}> {
  addTodo: (todo: { text: string }) => void;
}

export interface StoreState extends State {
  todos: Todo[];
}
