import { combineReducers } from "redux"
import { SUBMIT } from "./actionTypes"

const todoArray = (state = [], action) => {
    if (action.type === SUBMIT) {
        state.push(action.payload);
    }
    return state;
}

export default combineReducers(
    {
        todoArray
    }
)