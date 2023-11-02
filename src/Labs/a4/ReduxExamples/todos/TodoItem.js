import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";
function TodoItem({ todo }) {
  const dispatch = useDispatch();

  return (
    <li key={todo.id} className="list-group-item w-25">
      <button
        className="btn btn-danger float-end"
        onClick={() => dispatch(deleteTodo(todo.id))}
      >
        {" "}
        Delete{" "}
      </button>
      <button
        className="btn btn-primary float-end me-2"
        onClick={() => dispatch(setTodo(todo))}
      >
        {" "}
        Edit{" "}
      </button>
      {todo.title}
    </li>
  );
}
export default TodoItem;
