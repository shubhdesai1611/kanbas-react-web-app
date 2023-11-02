import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
function TodoForm() {
  const { todo } = useSelector((state) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item w-25">
      <button
        className="btn btn-success float-end"
        onClick={() => dispatch(addTodo(todo))}
      >
        {" "}
        Add{" "}
      </button>
      <button
        className="btn btn-warning float-end me-1"
        onClick={() => dispatch(updateTodo(todo))}
      >
        {" "}
        Update{" "}
      </button>
      <input
        className="w-50"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
      />
    </li>
  );
}
export default TodoForm;
