import { createStore, createTypedHooks } from 'easy-peasy';
import todosStore from './model';
import { TodosModel } from './interface';

const store = createStore<TodosModel>(todosStore);

const typedHooks = createTypedHooks<TodosModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;

export default store;