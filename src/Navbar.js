import React, { useState } from "react"
import SearchForm from "./SearchForm"
import LogoutButton from "./LogoutButton"
import { useNavigate } from "react-router-dom"
import "./Navbar.css"

function NavBar( {userAccess} ) {
  const navigate = useNavigate();

  function handleRegistrationClick() {
    navigate("/register");
  }

  if (userAccess) { // registered user navbar
    return (
      <div className="navContainer">
        <div className="internIOContainer">
          <h2><a href="#">Intern.io</a></h2>
        </div>
        <ul class="navList">
          <li>
            <SearchForm/>
          </li>
          <li>
            <LogoutButton/>
          </li>
        </ul>
      </div>
    );
  }
  else { // guest navbar
    return (
      <div className="navContainer">
        <div className="internIOContainer">
       <h2><a href="#">Intern.io</a></h2>
        </div>
        <ul class="navList">
          <li>
            <button className="btn btn-dark btn-block guest_btn" onClick={handleRegistrationClick}>Register Now</button>
          </li>
        </ul>
      </div>
    );
  }
};

export default NavBar;
