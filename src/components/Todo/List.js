import React from 'react';
import TodoItem from './Item';

const TodoList = ({ todos, editTodo, deleteTodo }) => {
  return (
    <div>
      <ul class="todo-l">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
