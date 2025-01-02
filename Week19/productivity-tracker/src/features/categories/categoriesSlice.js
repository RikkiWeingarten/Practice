import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [
    { id: 1, name: "Learning" },
    { id: 2, name: "Chores" },
  ],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    addCategory(state, action) {
      state.categories.push(action.payload);
    },
    editCategory(state, action) {
      const index = state.categories.findIndex((category) => category.id === action.payload.id);
      if (index !== -1) {
        state.categories[index] = action.payload;
      }
    },
    deleteCategory(state, action) {
      state.categories = state.categories.filter((category) => category.id !== action.payload);
    },
  },
});

export const { addCategory, editCategory, deleteCategory } = categoriesSlice.actions;

export const selectCategoryById = (state, categoryId) =>
  state.categories.categories.find((category) => category.id === categoryId);

export default categoriesSlice.reducer;
