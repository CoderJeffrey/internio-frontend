import React, {useState} from 'react';
import RegisterForm from "./RegisterFrom";
import { Navigate } from "react-router-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

function LoginForm({ Login, error}){
    const [details, setDetails] = useState({name: "",email:"",password:""})

    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }

    return (
        <>
            {<form onSubmit={submitHandler}>
            <h2>Login</h2>
            {(error !== "") ? (<div className="error">{error}</div>) : ""}
            <div className="form-group">
                <label htmlFor="name">Name : </label>
                <input className="form-control" type = "text" name = "name" id="name" placeholder="Enter username" onChange={e=> setDetails({...details, name: e.target.value})} value = {details.name}></input>
            </div>
            <div className= "form-group">
                <label htmlFor="password">Password:</label>
                <input className="form-control" type="password" name = "password" id="password" placeholder="Enter password" onChange={e=> setDetails({...details, password: e.target.value})} value = {details.password}></input>
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">Login</button>
            <p className="forgot-password text-right">
                New account  <Link to="/register" >Register?</Link>
            </p>
            </form>}
        </>
    )
}
export default LoginForm