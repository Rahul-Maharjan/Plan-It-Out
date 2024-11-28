import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import Pagination from "./components/Pagination"; // Import Pagination

const App = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [currentPage, setCurrentPage] = useState(1);
  const todosPerPage = 5;

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([{ id: Date.now(), text: newTodo, completed: false }, ...todos]);
      setNewTodo("");
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleClearTodo = () => {
    setTodos([]);
  };

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Get current todos to display based on the current page
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  const totalPages = Math.ceil(todos.length / todosPerPage);

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center pt-11 text-gray-800">
        Plan It Out
      </h2>
      <div className="flex justify-center items-center">
        <div className="bg-white p-6 w-[500px] rounded-lg shadow-md">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new todo"
              onKeyDown={handleKeyDown}
              className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            />
            <button
              onClick={handleAddTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full flex justify-center">
        <div className="w-[500px] bg-white rounded-lg shadow-md h-[400px]">
          <TodoList
            todos={currentTodos}
            onToggleComplete={handleToggleComplete}
            onDelete={handleDeleteTodo}
          />
          {/* Pagination Component */}
          {todos.length > todosPerPage && (
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={paginate}
            />
          )}
          {/* Clear All Button */}
          {todos.length > 0 && (
            <div className="flex justify-center items-center mt-4">
              <button
                onClick={handleClearTodo}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default App;
