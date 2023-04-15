import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, visible: true };

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
    increaseBy: (state, action) => {
      state.counter += action.payload;
    },
    toggle: (state) => {
      state.visible = !state.visible;
    },
  },
});

/////////////////////////////////////////////////////////////////

export const { increment, decrement, increaseBy, toggle } =
  counterSlice.actions;
export default counterSlice.reducer;
