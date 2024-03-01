import {  useState } from "react";
import "./App.css";
import Card from "./components/card/Card";
import Navbar from "./components/navbar/Navbar";
import {posts} from "./data";

const App = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");


 
  return (
    <div className="container">
      {user ? (
        <>
          <Navbar/>
          {posts.map((post) => (
          <Card key={post.id} post={post}/>
          ))} 
          <span className="username">{user}</span>
        </>
      ) : (
        <div className="login">
          <h2>Lama App</h2>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <button onClick={() => setUser(username)}>Login</button>
        </div>
      )}
    </div>
  );
};

export default App;
