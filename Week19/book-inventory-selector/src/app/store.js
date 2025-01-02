import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "../features/books/state/slice";

const store = configureStore({
  reducer: {
    books: booksReducer, 
  },
});

export default store;
