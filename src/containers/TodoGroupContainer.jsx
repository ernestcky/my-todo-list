import TodoGroup from '../components/TodoGroup';
import { connect } from "react-redux";
import { getTodoList } from './../apis/todos';
import { initTodoArray } from "../actions";

const mapStateToProps = (state) => ({
    todoArray: state.todoArray
});

const mapDispatchToProps = (dispatch) => ({
    initTodoArray: (data) => {
        dispatch(initTodoArray(data));
    }
})

const TodoGroupContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGroup);

export default TodoGroupContainer;