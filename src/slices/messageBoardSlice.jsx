// TODO: Start Create Slice Here
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  textInput: "",
  messageArray: [],
};

export const inputSlice = createSlice({
  name: "input",
  initialState: initialState,
  reducers: {
    addText: (state) => {
      state.messageArray.push(state.textInput);
      state.textInput = "";
    },
    deleteText: (state, action) => {
      state.messageArray.splice(action.payload, 1);
    },
    createText: (state, action) => {
      state.textInput = action.payload;
    },
  },
});

export const { addText, deleteText, createText } = inputSlice.actions;
export default inputSlice.reducer;
