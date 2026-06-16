import { configureStore } from '@reduxjs/toolkit';
import formReducer from './formSlice'

export const makeStore  = () => {
  return configureStore({
    reducer: {
      form: formReducer,
    },
  });
};
