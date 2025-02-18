import { connect } from 'react-redux';
import TodoHeader from '../components/Todo/Header';
import { createTodo } from '../actions';

export default connect(null, { createTodo })(TodoHeader);
