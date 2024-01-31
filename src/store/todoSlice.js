import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { API } from "../helpers/const";
import axios from "axios";
// todo============================================
export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  const res = await axios(API);
  console.log(res.data);
  return res.data;
});

export const getOneTodo = createAsyncThunk("todos/getOneTodo", async (id) => {
  const res = await axios(`${API}/${id}`);
  console.log(res.data);
  return res.data;
});

// todo===========================================
export const deleteItem = createAsyncThunk(
  "todos/deleteItem",
  async (id, { dispatch }) => {
    try {
      const res = await axios.delete(`${API}/${id}`);
      dispatch(deleteTodo({ id }));
    } catch (error) {
      console.log(error);
    }
  }
);

// todo============================================
export const editItem = createAsyncThunk(
  "/todos/editItem",
  async ({ id, newName, newImg, newPhone }, { dispatch }) => {
    try {
      const newEditedTodo = {
        name: newName,
        phone: newPhone,
        img: newImg,
      };
      const { data } = await axios.patch(`${API}/${id}`, newEditedTodo);
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  }
);
// todo============================================
export const addItem = createAsyncThunk(
  "/todos/addItem",
  async ({ name, phone, img }, { dispatch }) => {
    try {
      const newTodo = {
        name: name,
        phone: phone,
        img: img,
      };
      const { data } = await axios.post(`${API}`, newTodo);
      console.log(data);
      dispatch(getTodos());
    } catch (error) {
      console.log(error);
    }
  }
);

// todo===========================================

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: null,
    error: null,
    oneTodo: null,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        title: action.payload.todoTitle,
        id: Date.now(),
      });
      //   localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((elem) => elem.id !== action.payload.id);
      //   localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo(state, action) {
      const { id, newTitle } = action.payload;
      const editedTodo = state.todos.find((elem) => elem.id === id);
      editedTodo.title = newTitle;
      //   localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state, action) => {
        state.status = "загрузка данных";
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.status = "данные успешпешно загрузились";
        state.todos = action.payload;
        console.log(action.payload);
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.status = "ошибка при загрузке данных";
        state.error = action.payload.error;
      })
      .addCase(getOneTodo.pending, (state, action) => {})
      .addCase(getOneTodo.fulfilled, (state, action) => {
        state.oneTodo = action.payload;
        console.log(action.payload);
      })
      .addCase(getOneTodo.rejected, (state, action) => {});
  },
});
export const { deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
