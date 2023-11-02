import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todosReducer.todos);

  return (
    <div>
      <h2>Todo List</h2>
      <ul className="list-group">
        {/* <li className="list-group-item">
          <button onClick={() => addTodo(todo)}>Add</button>
          <button onClick={() => updateTodo(todo)}>Update </button>
          <input
            value={todo.title}
            onChange={(e) =>
              setTodo({
                ...todo,
                title: e.target.value,
              })
            }
          />
        </li>
        {todos.map((todo) => (
          <li key={todo.id} className="list-group-item">
            <button onClick={() => deleteTodo(todo.id)}>Delete </button>
            <button onClick={() => setTodo(todo)}>Edit </button>
            {todo.title}
          </li>
        ))} */}
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem todo={todo} />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
