import React, { useState } from "react";
import './App.css';
import { useNavigate } from "react-router-dom";
//import home from "./Home";

export const Login = (props) => {
    const Navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const result = props.arrm.find(({ Email,Password }) => Email===email && Password===pass);
        if(result){
            Navigate("/home",{state:{
                name:result.Name,
                sem:true,
            },});
            console.log("hurray");
        }
        else{
            console.log("incorrect");
        }
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}