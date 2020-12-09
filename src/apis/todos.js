import api from './api';

export const getTodoList = () => {
    return api.get("/Todo");
};

export const addNewTodo = (text) => {
    return api.post("/Todo", { text });
};
