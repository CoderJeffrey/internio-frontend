import React, {useState, useContext} from 'react';
import {Form, Alert} from 'react-bootstrap';
import Login from "../Login";
import { Redirect } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { LoginContext } from "../Context"
import { useNavigate } from "react-router-dom"
import axios from "axios"

function RegisterForm({Register}){
    const [details, setDetails] = useState({name: "",email:"",password:"", password_2:""});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");
    //change this

    const [login, setLogin] = useState(true); // keep
    const [invalid, setInvalid] = useState(false); // keep

    const {loggedIn, setLoggedIn} = useContext(LoginContext);
    const navigate = useNavigate();

    // submit alerts
    function RegistrationHandler(e){
        e.preventDefault();
        
        let registerurl = "https://internio-backend-cloud.herokuapp.com/register/" + details.name + "/" + details.password + "/" + details.email;
        
        console.log(registerurl);

        axios.get(registerurl).then(
            function(response){
                console.log(response)
                var inputpassword = document.getElementById("password1").value;
                var repeatpassword = document.getElementById("password2").value;
                if(!(inputpassword === repeatpassword)){
                    alert("password doesn't match")
                }
                else if (response.data === -1){
                    alert("Username is taken, pick another one")
                }
                else{
                    alert("successfully registered")
                    navigate("/login")
                    setLoggedIn(true)
                }
            }
        )
    }


    return (
        <>

            <form onSubmit={RegistrationHandler}>
            <h2>Register</h2>
                {invalid &&
                    <Alert color="primary" variant = "danger" >
                        Invalid form!
                    </Alert>
                }
            <div className= "form-group">
                <label>Name</label>
                <input type = "text" className="form-control" placeholder="Enter username" name ="name" onChange={e=> setDetails({...details, name: e.target.value})} value = {details.name}/>
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Enter email" onChange={e=> setDetails({...details, email: e.target.value})} value = {details.email}/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input id="password1" type="password" className="form-control" placeholder="Enter password" onChange={e=> setDetails({...details, password: e.target.value})} value = {details.password} />
            </div>
                <div className="form-group">
                    <label>Repeat Password</label>
                    <input id="password2" type="password" className="form-control" placeholder="Repeat password" onChange={e=> setDetails({...details, password_2: e.target.value})} value = {details.password_2} />
                </div>

            <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
            <p className="forgot-password text-right">
                Already registered <Link to="/login">log in?</Link>
            </p>

            </form>
        </>
    )

}


export default RegisterForm