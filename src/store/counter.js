import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0, //초기값.,
  },
  reducers: {
    //          value
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

//구조분해 > 객체만 가능해요
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
