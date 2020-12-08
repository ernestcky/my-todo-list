import TodoGroup from '../components/TodoGroup';
import { connect } from "react-redux";
import { submitTodo } from '../actions';

const mapStateToProps = (state) => ({
    todoArray: state.todoArray
});

const TodoGroupContainer = connect(mapStateToProps, null)(TodoGroup);

export default TodoGroupContainer;