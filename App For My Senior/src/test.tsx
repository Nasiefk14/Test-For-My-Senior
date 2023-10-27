import { useState, useEffect } from 'react';
import { Todo } from './store/interface';
import { useStoreState, useStoreActions } from './store';
import _ from 'lodash';

const Test = () => {
    const { todos } = useStoreState((state) => state);

    return (
        <div>
            <ul>
                {todos.map((todo: Todo, idx: number) => (
                    <li key={idx}>
                        <TodoItem todo={todo} />
                    </li>
                ))}
            </ul>

            <AddTodo />
        </div>
    );
};

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {

    return (
        <p>{todo.text}</p>
    );
};

const AddTodo = () => {
    const [todoText, setTodoText] = useState('');
    const { addTodo } = useStoreActions((actions) => actions);
    const debouncedAddTodo = _.debounce(addTodo, 500);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (todoText.length > 0) {
                debouncedAddTodo({ text: todoText});
                setTodoText('');
            }
        }, 500);

        return () => clearTimeout(timeoutId);
    }, [todoText, debouncedAddTodo]);

    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <input className='border-4 border-gray-800' type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} />
        </form>
    );
};

export default Test;