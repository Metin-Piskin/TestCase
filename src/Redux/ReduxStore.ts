import {configureStore, createSlice, PayloadAction} from '@reduxjs/toolkit';

interface reduxState {
  textInputs: Array<any>;
}

const initialState: reduxState = {
  textInputs: [
    {
      TextOne: '',
      TextTwo: '',
      TextThree: '',
      TextFour: '',
    },
  ],
};

const textInputSlice = createSlice({
  name: 'textInputs',
  initialState,
  reducers: {
    addTextInput: (state, action: PayloadAction<Array<any>>) => {
      state.textInputs = action.payload;
    },
  },
});

export const {addTextInput} = textInputSlice.actions;
export const textInputReducer = textInputSlice.reducer;

export const store = configureStore({
  reducer: {
    textInputs: textInputReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;