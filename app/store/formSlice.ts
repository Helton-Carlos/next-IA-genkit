import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface FormState {
  idioma: string;
  nivel: string;
  nome: string;
}

const initialState: FormState = {
  idioma: "",
  nivel: "",
  nome: "",
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    updateField: (
      state, 
      action: PayloadAction<{ field: keyof FormState; value: string }>
    ) => {
      const { field, value } = action.payload;

      state[field] = value;
    },
    resetForm: () => initialState,
    setFormData: (state, action: PayloadAction<FormState>) => {
      return action.payload;
    }
  },
});

export const { updateField, resetForm, setFormData } = formSlice.actions;
export default formSlice.reducer;