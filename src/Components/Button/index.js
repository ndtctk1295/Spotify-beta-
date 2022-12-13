import React from 'react';
import "./style.css"

import {useNavigate} from "react-router-dom"

const Button = () => {
    const navigate = useNavigate();
    return(
    
            <div>
                <div className="button-on">
                    <button className="signup" onClick={() => {
                        navigate("/signup")}}>
                    Sign up</button>
                    <button className="login" onClick={() => {
                        navigate("/login")}}>
                    Log in</button>
                </div>
            </div>
                
                
                
)}

export default Button;