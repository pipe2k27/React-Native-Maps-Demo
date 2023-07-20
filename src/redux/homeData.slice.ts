import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type DateState = {
  dateSelected: string;
};

const initialState: DateState = {
  dateSelected: '',
};

export const dateSlice = createSlice({
  name: 'homeData',
  initialState,
  reducers: {
    setDateSelected: (state, action: PayloadAction<string>) => {
      state.dateSelected = action.payload;
    },
  },
});
export const { setDateSelected } = dateSlice.actions;

export default dateSlice.reducer;
