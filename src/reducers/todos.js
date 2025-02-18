import {
  FETCH_TODOS,
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from '../constants/ActionTypes';

const initialState = [];
export default function todos(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_TODOS:
      return payload;
    case CREATE_TODO:
      return [...state, payload];
    case EDIT_TODO:
      return state.map((todo) => {
        if (todo.id === payload.id) {
          return {
            ...todo,
            ...payload,
          };
        }
        return todo;
      });
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== payload);
    // default:
    //   return state.map((todo) => {
    //     if (todo.id === payload.id) {
    //       return {
    //         ...todo,
    //         ...payload,
    //       };
    //     }
    //     return todo;
    //   });
    default:
      return state;
  }
}
