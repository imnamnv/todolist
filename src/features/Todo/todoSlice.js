import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTodo = createAsyncThunk("todo/getTodo", async () => {
  let todo = [];
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  todo = [{ id: 1, title: "Play" }];
  return todo;
});
const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    add(state, action) {
      const newValue = { id: state.list.length + 1, title: action.payload };
      console.log(newValue);
      state.list.push(newValue);
    },
  },
  extraReducers: {
    [getTodo.fulfilled]: (state, action) => {
      state.list = action.payload; // action.payload is data of createAsyncThunk
    },
  },
});

const { actions, reducer } = todoSlice;
export const { add } = actions;

export default reducer;
