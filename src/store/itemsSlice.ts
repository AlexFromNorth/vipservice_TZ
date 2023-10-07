import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [], // 
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addTickets(state, action) {
      // console.log(action.payload)
      state.tickets = action.payload;
      // console.log(state.tickets)
    },

  },
});

export const { addTickets } = itemsSlice.actions;

export default itemsSlice.reducer;
