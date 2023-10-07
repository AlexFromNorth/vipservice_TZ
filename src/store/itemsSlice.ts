import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [], 
};

const itemsSlice = createSlice({
  name: "items",
  initialState,
  reducers: {
    addTickets(state, action) {
      state.tickets = action.payload;
    },

  },
});

export const { addTickets } = itemsSlice.actions;

export default itemsSlice.reducer;
