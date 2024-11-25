import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "none" }}
      >
        {todo.text}
      </span>
      <button
        className="bg-[#93939393] px-4 py-2 ml-4 rounded hover:bg-[#838383]"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
