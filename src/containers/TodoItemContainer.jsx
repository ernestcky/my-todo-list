import TodoItem from './../components/TodoItem';
import { connect } from 'react-redux';
import { deleteTodo, toggleTodo } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    toggleTodo: (id) => {
        dispatch(toggleTodo(id));
    },
    deleteTodo: (id) => {
        dispatch(deleteTodo(id));
    }
});

const TodoItemContainer = connect(null, mapDispatchToProps)(TodoItem);

export default TodoItemContainer;