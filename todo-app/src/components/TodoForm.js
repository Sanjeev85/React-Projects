import { useState, useEffect, useRef } from "react";
import React from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  // ! automatic focus to input form with inputRef
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    /**
     * !props update using function
     * ! this is addTodo Function With onSubmit name
     */
    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      text: input,
    });
    setInput("");
  };

  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      {!props.edit ? (
        <>
          <input
            type="text"
            placeholder="Add a todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add todo</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Update todo"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
