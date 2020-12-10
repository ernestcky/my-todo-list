import api from "./api";

export const getTodoList = () => {
  return api.get("/Todo");
};

export const addNewTodo = (text, categoryArr) => {
  return api.post("/Todo", { text: text, done: false, tagList: categoryArr });
};

export const deleteTodo = (id) => {
  return api.delete("/Todo/" + id);
};

export const updateTodo = (id, done) => {
  return api.put("/Todo/" + id, { done: !done });
};

export const getTagList = () => {
  return api.get("/tag");
};

export const addNewTag = (content, color) => {
  console.log(content, color);
  return api.post("/tag", { content: content, color: color });
};

export const deleteTag = (id) => {
  return api.delete("/tag/" + id);
};

export const updateTag = (id, content, color) => {
  return api.put("/tag/" + id, { content: content, color: color });
};
