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
            <div className='login-container w-full h-screen bg-zinc-900 text-white'>
                <div className='sub-login-container'>
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
                        <span style={{ display: "flex", justifyContent: "space-between", marginBottom: "15px" }}><div><input type='checkbox' name='remember' />Remember me
                        </div><a href='#' style={
                            {
                                fontSize: '1rem',
                                marginRight: "0.5rem",
                                marginBottom: '1rem',
                                textDecoration: "underline"
                            }
                        }>Forgot password?</a>
                        </span>
                        <button className='login-submit-btn'>Sign in</button>
                    </form>
                    <div style={{textAlign: "center", marginTop: "10px", color: "gray"}}>Don't have a account? <span className='text-white underline'>SignUp</span></div>
                </div>
            </div>
        </>
    )
}

export default Login
