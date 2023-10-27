import { useStoreActions } from "easy-peasy";
import _ from "lodash";
import { useState, useEffect } from "react";
import { TodoActions } from "../store/interface";

const DebouncedInput = () => {
  const [todoText, setTodoText] = useState("");
  const { addTodo } = useStoreActions<TodoActions>((actions) => actions);
  const debouncedAddTodo = _.debounce(addTodo, 500);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (todoText.length > 0) {
        debouncedAddTodo({ text: todoText });
        setTodoText("");
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [todoText, debouncedAddTodo]);

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="p-[15px] border-2"
        type="text"
        placeholder="Enter Text..."
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
    </form>
  );
};

export default DebouncedInput;