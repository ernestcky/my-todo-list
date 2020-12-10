import TodoGenerator from '../components/TodoGenerator';
import { connect } from "react-redux";
import { submitTodo } from '../actions';
import { initTagArray } from './../actions';

const mapStateToProps = (state) => ({
    tagArray: state.tagArray
})

const mapDispatchToProps = (dispatch) => ({
    submitTodo: (todo) => {
        dispatch(submitTodo(todo));
    },
    initTagArray: (data) => {
        dispatch(initTagArray(data))
    }
});

const TodoGeneratorContainer = connect(mapStateToProps, mapDispatchToProps)(TodoGenerator);

export default TodoGeneratorContainer;