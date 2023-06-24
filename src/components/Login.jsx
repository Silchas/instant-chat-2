import React, { useEffect } from "react";
import { useContext } from "react";
import { SignInContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const {handleClick, User} = useContext(SignInContext)
    const navigate = useNavigate()

    useEffect(() =>{
        if(User) {
            navigate("/")
        }
    }, [User])

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Hello there</h1>
                    <p className="py-6">
                        Join the conversation, meet new people and make connections in one shared platform.
                    </p>
                    <button onClick={handleClick} className="btn btn-primary">LOGIN WITH GOOGLE</button>
                </div>
            </div>
        </div>
        );
};

export default Login;
