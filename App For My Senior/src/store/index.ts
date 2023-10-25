import { createStore, persist } from "easy-peasy";
import { StoreModel } from "./interface";
import todo from "./model";

const store = createStore<StoreModel>(persist(todo));

export default store;