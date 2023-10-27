import { useStoreState } from "easy-peasy";
import { StoreState, Todo } from "../store/interface";
import DebouncedInput from "../components/DebouncedInput";

const DebounceShowcase = () => {

const todos: Todo[] = useStoreState((state: StoreState) => state.todos);

return (
    <div className="w-[60%] h-screen m-auto text-center">
        <h1 className="text-center text-3xl font-bold">Insert Your Text Below</h1>
        <h3 className="text-center mb-5">Have Your Text Displayed After 500ms</h3>
        <ul>
            {todos.map((todo: Todo, idx: number) => (
                <li key={idx}>
                    <TodoItem todo={todo} />
                </li>
            ))}
        </ul>
        <DebouncedInput />
    </div>
  );
};

const TodoItem: React.FC<{ todo: Todo }> = ({ todo }) => {
  return <>{todo.text}</>;
};

export default DebounceShowcase;
