import api from "./api";

export const getTodoList = () => {
  return api.get("/Todo");
};

export const addNewTodo = (text, categoryArr) => {
  return api.post("/Todo", { text: text, done: false, category: categoryArr });
};

export const deleteTodo = (id) => {
  return api.delete("/Todo/" + id);
};

export const updateTodo = (id, done) => {
  return api.put("/Todo/" + id, { done: !done });
};
