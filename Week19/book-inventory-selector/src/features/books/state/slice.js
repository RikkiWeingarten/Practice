import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  books: [
    { id: 1, title: "Dune", genre: "Science Fiction" },
    { id: 2, title: "Dracula", genre: "Horror" },
    { id: 3, title: "The Hobbit", genre: "Fantasy" },
    { id: 4, title: "Frankenstein", genre: "Horror" },
    { id: 5, title: "Neuromancer", genre: "Science Fiction" },
    { id: 6, title: "Harry Potter", genre: "Fantasy" },
  ],
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook(state, action) {
      state.books.push(action.payload);
    },
    removeBook(state, action) {
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export const selectBooks = (state) => state.books.books;

export const selectHorrorBooks = createSelector([selectBooks], (books) =>
  books.filter((book) => book.genre === "Horror")
);

export const selectFantasyBooks = createSelector([selectBooks], (books) =>
  books.filter((book) => book.genre === "Fantasy")
);

export const selectScienceFictionBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === "Science Fiction")
);

export default booksSlice.reducer;
