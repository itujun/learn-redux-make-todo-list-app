import React from 'react';
import { GrClose } from 'react-icons/gr';

const TodoItem = ({ todo, editTodo, deleteTodo }) => {
  return (
    <li className={`todo-item ${todo.completed ? 'checked' : ''}`}>
      <div className="todo-text" onClick={() => editTodo(todo)}>
        {todo.text}
      </div>
      <div
        class="todo-delete"
        style={{ color: 'red', cursor: 'pointer' }}
        onClick={() => deleteTodo(todo.id)}
      >
        <GrClose />
      </div>
    </li>
  );
};

export default TodoItem;
