import React from "react";

const TodoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li>
      <div className="flex justify-between items-center space-x-3 space-y-3 px-6">
        <div className="space-x-5 flex items-center">
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
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
