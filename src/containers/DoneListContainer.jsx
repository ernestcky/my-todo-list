import { connect } from "react-redux";
import DoneList from '../components/DoneList';

const mapStateToProps = (state) => ({
    doneTodoArray: state.todoArray.filter(todo => todo.done)
});

const DoneListContainer = connect(mapStateToProps)(DoneList);

export default DoneListContainer;