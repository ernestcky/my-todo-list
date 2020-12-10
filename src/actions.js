import {
  DELETE,
  SUBMIT,
  TOGGLE,
  INIT_TODOS,
  INIT_TAGS,
  SUBMIT_TAG,
  DELETE_TAG,
} from "./actionTypes";

export const submitTodo = (todo) => {
  return {
    type: SUBMIT,
    payload: todo,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLE,
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE,
    payload: id,
  };
};

export const initTodoArray = (data) => {
  return {
    type: INIT_TODOS,
    payload: data,
  };
};

export const initTagArray = (data) => {
  return {
    type: INIT_TAGS,
    payload: data,
  };
};

export const submitTag = (tag) => {
  return {
    type: SUBMIT_TAG,
    payload: tag,
  };
};

export const deleteTag = (id) => {
  return {
    type: DELETE_TAG,
    payload: id,
  };
};
