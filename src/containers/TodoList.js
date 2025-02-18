import { connect } from 'react-redux';
import TodoList from '../components/Todo/List';
import { fetchTodos } from '../actions';

const mapStateToProps = (state) => ({
  todos: state.todos,
});
export default connect(mapStateToProps, { fetchTodos })(TodoList);
