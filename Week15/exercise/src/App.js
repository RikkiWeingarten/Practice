
import './App.css';
import Post from "./Post";
import posts from "./posts.json";

function App() {
  return (
    <div className="App">
      {
        posts.map(post => {
          return <Post key={post.id} post={post}/>
        })
      }

    </div>
  );
}

export default App;
