import React, { createContext, useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import {
  Todo,
  Counter,
  MySecrets,
  HomePage,
  LoginPage,
  AboutMe,
} from "./pages";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute";

import "./App.css";

export const UserContext = createContext(null);

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <>
      <UserContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
        {navbar()}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/toDoApp" element={<ProtectedRoute />}>
            <Route exact path="/toDoApp" element={<Todo />} />
          </Route>
          <Route path="/mySecrets" element={<ProtectedRoute />}>
            <Route exact path="/mySecrets" element={<MySecrets />} />
          </Route>
          <Route path="/counter" element={<Counter />} />
          <Route path="/aboutMe" element={<AboutMe />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

function navbar() {
  return (
    <nav className="container">
      <ul
        className="apps"
        style={{ display: "flex", gap: "10px", listStyle: "none" }}
      >
        <li >
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Todo">Todo List</Link>{" "}
        </li>
        <li>
          <Link to="/Counter">Counter</Link>{" "}
        </li>
        <li>
          <Link to="/MySecrets">My Secrets</Link>{" "}
        </li>
        <li>
          <Link to="/AboutMe">About Me</Link>{" "}
        </li>
      </ul>
    </nav>
  );
}

export default App;
