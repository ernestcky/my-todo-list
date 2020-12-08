import { combineReducers } from "redux"
import { SUBMIT, TOGGLE } from "./actionTypes"

const todoArray = (state = [], action) => {
    if (action.type === SUBMIT) {
        return state.concat(action.payload)
    }
    if (action.type === TOGGLE) {
        return state.map(todo => {
            if (todo.id === action.payload) {
                todo.done = !todo.done
            }
            return todo
        })
    }
    return state;
}

export default combineReducers(
    {
        todoArray
    }
)