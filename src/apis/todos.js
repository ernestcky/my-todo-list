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

export const updateTodo = (id, text, done, tagList) => {
  return api.put("/Todo/" + id, { text: text, done: !done, tagList: tagList });
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

export const updateTag = (tag) => {
  return api.put("/tag/" + tag.tagId, { content: tag.content, color: tag.color });
};
