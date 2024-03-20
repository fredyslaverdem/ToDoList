'use client'
import { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  }

  const deleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="flex flex-col w-1/3">
        <h1 className='text-black font-bold'>
          Ingrese su tarea
        </h1>
        <input
          className="border-2 border-gray-300 p-2 mb-4 rounded"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={addTodo}
        >
          Add
        </button>
        {todos.map((todo, index) => (
          <div key={index} className="flex justify-between p-2 mt-2 border-2 border-gray-300 rounded">
            <p>{todo}</p>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={() => deleteTodo(index)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

