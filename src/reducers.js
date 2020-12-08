import { combineReducers } from "redux"
import { SUBMIT } from "./actionTypes"

const todoArray = (state = [], action) => {
    if (action.type === SUBMIT) {
        return state.concat(action.payload)
    }
    return state;
}

export default combineReducers(
    {
        todoArray
    }
)