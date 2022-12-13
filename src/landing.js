import React from "react";
import "./landing.css";
import user from "./images/user.jpeg";
import login from "./images/login.png";
import loginImg from "./images/user.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { Redirect } from "react-router-dom"
import { useNavigate } from "react-router-dom"


function Landing() {
    const navigate = useNavigate();
    function click_login(){
        navigate("/login");
    }
    function click_register(){
        navigate("/register");
    }
    function click_guest(){
        navigate("/main-guest")
    }
  return (
      <div className="outside">
          <div className="inside">
                  <p className="welcome">Get Your First Job Now</p>
                  <h1 className="line welcome">@intern.io</h1>
                  <hr width="100%"></hr>
                    <button className="btn btn-dark btn-lg btn-block" onClick={click_login}>Login</button>
                    <button className="btn btn-dark btn-lg btn-block" onClick={click_register}>Register</button>
                    <button className="btn btn-dark btn-lg btn-block" onClick={click_guest}>Guest Page</button>

          </div>
      </div>



  );
}
export default Landing;
