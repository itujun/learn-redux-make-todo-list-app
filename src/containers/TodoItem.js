import { connect } from 'react-redux';
import TodoItem from '../components/Todo/Item';
import { editTodo, deleteTodo } from '../actions';

export default connect(null, { editTodo, deleteTodo })(TodoItem);
