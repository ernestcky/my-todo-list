import TodoGenerator from '../components/TodoGenerator';
import { connect } from "react-redux";
import { submitTodo } from '../actions';

const mapDispatchToProps = (dispatch) => ({
    submitTodo: (todo) => {
        dispatch(submitTodo(todo));
    },
});

const TodoGeneratorContainer = connect(null, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;