import React, { useState } from 'react';
import { CiLogin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import { use } from 'react';



const Login = () => {
    const [changePassword, setChangePassword] = useState(true);
    const changeIcon = changePassword === true ? false : true;
    return (
        <>
            <div className='login-first-container'>
                <div className='login-second-container'>
                    <div className='login-third-container'>
                        <div className='login-fourth-container'>
                            <div className='login-fifth-container'>
                                <CiLogin className='logo-login-container' />
                                <h1>Welcome!</h1>
                                <p>Sign in to your account</p>
                                <form>
                                    <AiOutlineMail className='login-friendly-icons' />
                                    <input type='email' name='email' placeholder='Email' autoComplete='off' />
                                    <span onClick={() => setChangePassword(changeIcon)}>
                                        {
                                            changeIcon ? <IoEyeOutline className='login-friendly-icons' /> : <IoEyeOffOutline className='login-friendly-icons' />
                                        }

                                    </span>
                                    <input type={changePassword ? "password" : "text"} name='password' placeholder='Password' />
                                    <a href='#' style={
                                        {
                                            fontSize: '1.1rem',
                                            marginRight: "0.5rem",
                                            marginBottom: '1rem',
                                            textDecoration: "underline",
                                            color: "#fff",
                                            display: "block",
                                            textAlign: "right"
                                        }
                                    }>Forgot password?</a>
                                    <button className='login-submit-btn'>Sign in</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Login
