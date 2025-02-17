import React, { useState } from 'react';

const TodoHeader = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo('');
  };
  return (
    <>
      <header>
        <h1>To Do List</h1>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add Todo"
            onChange={handleChange}
            value={todo}
          />
          <input
            type="submit"
            className="addBtn"
            value="Submit"
            id="add_button"
          />
        </form>
      </header>
    </>
  );
};

export default TodoHeader;
