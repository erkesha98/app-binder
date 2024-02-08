import React, { useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  //ADD BUTTON
  const addHandler = () => {
    console.log("clicked");
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, checked: false }]);
      setNewTodo("");
    }
  };

  //DELETE BUTTON
  const deleteHandler = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  //TOGGLE BOX
  const toggleHandler = (index) => {
    const newTodos = [...todos];
    newTodos.checked = !newTodos.checked;
    setTodos(newTodos);
  };

  return (
    <div className="todo-box">
      <h1 className="todo-title">Todo List</h1>
      <input
        className="todo-input"
        value={newTodo}
        type="text"
        placeholder="write here..."
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button className="add-btn" onClick={addHandler}>
        Add
      </button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" onChange={() => toggleHandler(index)} />
            <span>{todo.text}</span>
            <button className="delete-btn" onClick={() => deleteHandler(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
