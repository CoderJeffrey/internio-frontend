import React, { useState, useContext } from "react";
import LoginForm from "./components/LoginForm";
import "./Login.css";
import axios from 'axios';
import { login } from "./util";
import { LoginContext } from "./Context"
import { Router, useNavigate } from "react-router-dom"
import { useHistory } from "react-router-dom"
import './config'

function Login(){
    const [user, setUser] = useState({name:"", email:""});
    const [userId, setuserId] = useState(0);
    const [error, setError] = useState("");

    const {loggedIn, setLoggedIn} = useContext(LoginContext); // keep
    const navigate = useNavigate(); // keep

    const Login = details => {
        console.log(details);
        
        let loginurl = "https://internio-backend-cloud.herokuapp.com/login/" + details.name + "/" + details.password;
        console.log(loginurl);

        axios.get(loginurl).then(
            function(response){
                console.log(response)
                if (response.data === -1){
                    alert("Check Username and Password and try again")
                }
                else{
                    global.config.user.userID = response.data;
                    localStorage.setItem('userID', response.data);
                    navigate("/main-user")
                    setLoggedIn(true)
                }
            }
        )
    }

    const Logout = () => {
        setUser({name:"", email:""});
        console.log("logout");
    }

    return (
            <div className="outside">
                <div className="inside">
                    <div className="Login">
                        {(user.email !== "") ? (
                            <div className="welcome">
                                <h2>Welcome, <span>{user.name}</span></h2>
                                <button>Logout</button>
                            </div>
                        ) : (
                            <LoginForm Login={Login} error={error}/>
                        )}
                    </div>
                </div>
            </div>
    );
}

export default Login;