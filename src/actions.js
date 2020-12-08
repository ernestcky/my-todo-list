import { SUBMIT } from "./actionTypes"

export const submitTodo = (todo) => {
    return {
        type: SUBMIT,
        payload: todo
    }
}