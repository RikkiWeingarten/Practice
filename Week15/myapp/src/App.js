import logo from './logo.svg';
import './App.css';
import User from "./User";
import users from "./users.json";


function App() {
  return (
    <>
    {users.map(item => {
      return <User info={item}/>
    })
    }
    </>
  );
}

export default App;
