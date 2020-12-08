import { SUBMIT, TOGGLE } from "./actionTypes"

export const submitTodo = (todo) => {
    return {
        type: SUBMIT,
        payload: todo
    }
}

export const toggleTodo = (id) => {
    return {
        type: TOGGLE,
        payload: id
    }
}
