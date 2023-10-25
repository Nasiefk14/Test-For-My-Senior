import { Action } from "easy-peasy";

export interface IItem {
    id: string;
    item: string
}

export interface ITodo{
    items: IItem[];

    setItem: Action<ITodo, string>;
    removeItem: Action<ITodo, string>;
    updateItem: Action<ITodo, IItem>;
}

export interface StoreModel extends ITodo{}