import { action } from "easy-peasy";
import { ITodo } from "../interface";

const todo: ITodo = {
  items: [
    {
      id: "1",
      item: "Default item",
    },
  ],
  setItem: action((state, payload) => {
    const item = { id: new Date().getMilliseconds().toString(), item: payload };
    state.items.push(item);
  }),
  removeItem: action((state, payload) => {
    state.items = state.items.filter((item) => item.id !== payload);
  }),
  updateItem: action((state, payload) => {
    state.items = state.items.map((item) => {
      if (item.id === payload.id) {
        return payload;
      }
      return item;
    });
  }),
};

export default todo;
