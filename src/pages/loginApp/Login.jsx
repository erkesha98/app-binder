import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

const creds = {
  username: "geek",
  password: "happy",
};
const Login = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const { setIsAuthenticated } = useContext(UserContext);
  const navigate = useNavigate();
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (creds.username === user.username && creds.password === user.password) {
      //navigate to AccountPage
      setIsAuthenticated(true);
      window.history.back();
      // history.goBack();
    }
  };

  const onChangeHandler = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="login">
      <h1>LoginPage</h1>
      <form onSubmit={onSubmitHandler}>
        <input
          name="username"
          value={user.username}
          onChange={onChangeHandler}
        />
        <br /> <br />
        <input
          name="password"
          value={user.password}
          onChange={onChangeHandler}
        />
        <br /> <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

Login.propTypes = {};

export default Login;
