import { combineReducers } from "redux"
import { SUBMIT, TOGGLE, DELETE } from "./actionTypes"

const todoArray = (state = [], action) => {
    if (action.type === SUBMIT) {
        return state.concat(action.payload)
    }
    if (action.type === TOGGLE) {
        return state.map(todo => {
            if (todo.id === action.payload) {
                return {
                    ...todo,
                    done: !todo.done
                }
            }
            else {
                return {
                    ...todo
                }
            }
        })
    }
    if (action.type === DELETE) {
        return state.filter(todo => (todo.id != action.payload))
    }

    return state;
}

export default combineReducers(
    {
        todoArray
    }
)