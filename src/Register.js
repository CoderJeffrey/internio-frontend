import React, {useState} from 'react';
import RegistrationFrom from "./components/RegisterFrom";
import "./Register.css";
import { Router, useNavigate } from "react-router-dom"
import axios from "axios";
import { LoginContext } from "./Context"
import  { useContext } from "react";

function Register(){
    const navigate = useNavigate(); // keep
    const [user, setUser] = useState({name:"", email:""});
    const [invalid, setInvalid] = useState(false);

    const {loggedIn, setLoggedIn} = useContext(LoginContext); // keep

    const Register = details => {
        console.log(details);
        //here check for the validity


    }

    return (
        <div className="outside">
            <div className="inside">
                 <div className = "Register">
                    <RegistrationFrom Register={Register}/>
                 </div>
            </div>
        </div>
    );

}

export default Register