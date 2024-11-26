import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const [languages, setLanguages] = useState([
    {name: "Php", votes: 0},
    {name: "Python", votes: 0},
    {name: "JavaSript", votes: 0},
    {name: "Java", votes: 0}
  ]);

  const handleVote = (i) => {
    languages[i].votes++;
    setLanguages([...languages]); // clone array
  }

  return (
    <>
      <h2>Voting App:</h2>
      {
        languages.map((item, indx) => {
          return (
            <div key={indx}>
              {item.name} {item.votes}
              <button onClick={()=>handleVote(indx)}>Vote!</button>
            </div>
          )
        })
      }
    </>
  );
}

export default App
