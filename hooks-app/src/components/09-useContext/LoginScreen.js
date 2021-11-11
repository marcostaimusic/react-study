import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export const LoginScreen = () => {
  const { setUser } = useContext(UserContext);

  return (
    <div>
      <h1>loginScreen</h1>
      <input type="text" id="user" name="user" placeholder="user" />
      <button
        className="btn btn-primary"
        onClick={() => {
          setUser(document.getElementById("user").value);
        }}
      >
        Login
      </button>
    </div>
  );
};
