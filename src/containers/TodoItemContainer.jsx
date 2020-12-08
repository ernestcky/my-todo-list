import TodoItem from './../components/TodoItem';
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => {
        dispatch(toggleTodo(id));
    },
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;