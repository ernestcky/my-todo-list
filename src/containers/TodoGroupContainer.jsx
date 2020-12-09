import TodoGroup from '../components/TodoGroup';
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
    todoArray: state.todoArray
});

const TodoGroupContainer = connect(mapStateToProps, null)(TodoGroup);

export default TodoGroupContainer;