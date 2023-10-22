import { useState } from "react";
import { login, logout } from "../store";
import { useDispatch, useSelector } from "react-redux";
//useDispatch for getting states, useSelector for modifying state

export const Login = () => {
  const [newUsername, setNewUsername] = useState("");
  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h1>{username}</h1>
      <input
        onChange={(e) => {
          setNewUsername(e.target.value);
        }}
      ></input>
      <button onClick={() => dispatch(login({ username: newUsername }))}>
        Submit Login
      </button>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};
