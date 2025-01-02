import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectHorrorBooks, selectFantasyBooks, selectScienceFictionBooks, selectBooks } from "./state/slice";

const BookList = () => {
  const [selectedGenre, setSelectedGenre] = useState("All");
  
  const allBooks = useSelector(selectBooks);
  console.log(allBooks);
  const horrorBooks = useSelector(selectHorrorBooks);
  const fantasyBooks = useSelector(selectFantasyBooks);
  const scienceFictionBooks = useSelector(selectScienceFictionBooks);

  let displayedBooks;
  switch (selectedGenre) {
    case "Horror":
      displayedBooks = horrorBooks;
      break;
    case "Fantasy":
      displayedBooks = fantasyBooks;
      break;
    case "Science Fiction":
      displayedBooks = scienceFictionBooks;
      break;
    default:
      displayedBooks = allBooks;
  }

  return (
    <div>
      <h1>Book Inventory</h1>
      <div>
        <label htmlFor="genre-selector">Filter by Genre: </label>
        <select
          id="genre-selector"
          value={selectedGenre}
          onChange={(e) => setSelectedGenre(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Horror">Horror</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Science Fiction">Science Fiction</option>
        </select>
      </div>
      <ul>
        {displayedBooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> - {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
