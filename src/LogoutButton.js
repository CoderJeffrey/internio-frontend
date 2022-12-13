import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { LoginContext } from "./Context"
import "./LogoutButton.css"

function LogoutButton() {

  const {loggedIn, setLoggedIn} = useContext(LoginContext);
  const navigate = useNavigate();

  function handleClick() {
    setLoggedIn(false);
    localStorage.removeItem('userID')
    localStorage.removeItem('url')
    navigate("/");
  }

  return (
      <button className="clearButton" onClick={handleClick}>Logout</button>
  );
}

export default LogoutButton;