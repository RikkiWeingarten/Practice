import React from "react";
import ErrorBoundary from "./Components/ErrorBoundary.component";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./Components/PostList.component";
import { Example1, Example2, Example3 } from "./Components/Examples.component";

// const routes = (
//   <Routes>
//       <Route path="/" element={<PostList />}/>
//       <Route path="/profile" element={<ProfileScreen />}/>
//       <Route path="/shop" element={<ShopScreen />}/>

//     </Routes>
// );

const routes = (
  <Routes>
    <Route path="/" element={<Example1 />} />
    <Route path="/skills" element={<Example2 />} />
    <Route path="/experiences" element={<Example3 />} />
  </Routes>
);

export default class App extends React.Component {
  handleClick = async () => {
    try {
      
      const body = {
        key1: "myusername",
        email: "mymail@gmail.com",
        name: "Isaac",
        lastname: "Doe",
        age: 27,
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      };
      const res = await fetch(
        "https://webhook.site/797b6dd9-332f-4b7b-92d1-449dc49e2e5b", options
      );
    } catch {
      console.error(err);
    }
  };
  render() {
    return (
      <ErrorBoundary>
        <BrowserRouter>
          <Navbar />
          <ErrorBoundary>{routes}</ErrorBoundary>
        </BrowserRouter>
        <button onClick={this.handleClick}>Post Data</button>
      </ErrorBoundary>
    );
  }
}

// function Navbar() {
//   return (
//     <>
//     <p><NavLink to="/">Posts</NavLink></p>
//     <p><NavLink to="/profile">Profile</NavLink></p>
//     <p><NavLink to="/shop">Shop</NavLink></p>
//     </>
//   )

// }

function Navbar() {
  return (
    <>
      <p>
        <NavLink to="/">Social Media</NavLink>
      </p>
      <p>
        <NavLink to="/skills">Skills</NavLink>
      </p>
      <p>
        <NavLink to="/experiences">Shop</NavLink>
      </p>
    </>
  );
}

function HomeScreen() {
  return <h1>Home</h1>;
}

function ShopScreen() {
  return <h1>Shop</h1>;
}

function ProfileScreen() {
  //throw new Error("Oh no!")
  return <h1>Profile</h1>;
}
