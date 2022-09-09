import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'utils',
  initialState: {
    toastMessages: [],
  },
  reducers: {
    pushToastMessage: (state, action) => {
      state.toastMessages.push(action.payload);
    },
    clearToastMessages: (state) => {
      state.toastMessages = [];
    },
  },
});

export default slice.reducer;
export const { pushToastMessage, clearToastMessages } = slice.actions;
