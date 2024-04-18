import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customer: {},
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    setUser(state, action) {
      state.customer = action.payload;
    },
    clearUser(state) {
      state.customer = {};
    },
  },
});

export const { setUser, clearUser } = customerSlice.actions;

export default customerSlice.reducer;
