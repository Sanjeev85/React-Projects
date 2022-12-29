import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

function TodoList() {
  // ? array of todos
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    todo.text = todo.text.trim();
    if (!todo.text) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...newTodos);
  };

  // ! Start of function that updates through child
  const updateTodo = (todo_id, new_value) => {
    new_value.text = new_value.text.trim();
    if (!new_value.text) {
      return;
    }
    setTodos((prev) =>
      prev.map((item) => (item.id === todo_id ? new_value : item))
    );
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) todo.isComplete = !todo.isComplete;
      return todo;
    });
    setTodos(updatedTodos);
  };

  const removeTodo = (id) => {
    const remove_todo = [...todos].filter((todo) => todo.id !== id);
    setTodos(remove_todo);
  };
  // ! end of function that updates through child

  return (
    <div>
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default TodoList;
