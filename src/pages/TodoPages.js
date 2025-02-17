import React, { useEffect, useState } from 'react';
import TodoHeader from '../components/Todo/Header';
import TodoList from '../components/Todo/List';
import {
  editTodoApi,
  fetchTodosApi,
  createTodoApi,
  deleteTodoApi,
} from '../components/Api/TodosApi';

const TodoPages = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const response = await fetchTodosApi();
    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const createTodo = async (data) => {
    const todo = { text: data, completed: false };
    const response = await createTodoApi(todo);
    setTodos([...todos, response.data]);
  };

  const editTodo = async (data) => {
    const editedTodo = { ...data, completed: !data.completed };
    const response = await editTodoApi(data.id, editedTodo);

    const updatedTodo = todos.map((todo) => {
      if (todo.id === data.id) {
        return { ...todo, ...response.data };
      }
      return todo;
    });

    setTodos(updatedTodo);
  };

  const deleteTodo = async (id) => {
    await deleteTodoApi(id);
    const deletedTodo = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(deletedTodo);
  };

  return (
    <div>
      <TodoHeader addTodo={createTodo} />
      <TodoList todos={todos} editTodo={editTodo} deleteTodo={deleteTodo} />
    </div>
  );
};

export default TodoPages;
