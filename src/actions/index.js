import * as types from '../constants/ActionTypes';
import {
  fetchTodosApi,
  createTodoApi,
  editTodoApi,
  deleteTodoApi,
} from '../components/Api/TodosApi';

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await fetchTodosApi();
    dispatch({ type: types.FETCH_TODOS, payload: response.data });
  } catch (error) {
    console.log('error fetch todos: ', error);
  }
};

export const createTodo = (text) => async (dispatch) => {
  try {
    const todo = { text, completed: false };
    const response = await createTodoApi(todo);
    dispatch({ type: types.CREATE_TODO, payload: response.data });
  } catch (error) {
    console.log('error create todo: ', error);
  }
};

export const editTodo = (text) => async (dispatch) => {
  try {
    const editedTodo = { ...text, completed: !text.completed };
    const response = await editTodoApi(text.id, editedTodo);

    dispatch({ type: types.EDIT_TODO, payload: response.data });
  } catch (error) {
    console.log('error edit todo: ', error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  try {
    await deleteTodoApi(id);
    dispatch({ type: types.DELETE_TODO, payload: id });
  } catch (error) {
    console.log('error delete todo: ', error);
  }
};
