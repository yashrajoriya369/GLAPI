import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { CiTwitter } from "react-icons/ci";
import loginBanner from "../images/v1043-045a.jpg"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <div className='main-container w-full h-screen'>
                <div className='subcontainer'>
                    <div className='form-container flex'>
                        <div className='image-banner'><img src={loginBanner} alt='image-banner' /></div>
                        <div className='login-form'>
                            <div className='main-login-form'>
                                <h2>Login</h2>
                                <p>Welcome Back!</p>
                                <form>
                                    <label htmlFor='email'>
                                        <input type='email' name='email' placeholder='example@email.com' />
                                        <span className='input-icon text-zinc-400'><AiOutlineMail />
                                        </span>
                                    </label>
                                    <label htmlFor='password'>
                                        <input type='password' name='password' placeholder='Password' />
                                        <span className='input-icon text-zinc-400 cursor-pointer'><IoEyeOutline /></span>
                                    </label>
                                    <div className='forgot-links'>
                                        <label htmlFor='checkbox'><input className='cursor-pointer' type='checkbox' name='checkbox' />Remember me</label>
                                        <button className='cursor-pointer'>Reset Password</button>
                                    </div>
                                    <button className='login-btn' type='submit'>Sign in</button>
                                </form>
                                <div className='other-links'>
                                    <div className='first-level'>
                                        <p>Don't have an account?</p>
                                        <button>Sign up</button>
                                    </div>
                                    <div className='second-level'>
                                        <hr /><p>or</p><hr />
                                    </div>
                                    <div className='third-level'>
                                        <button className='flex justify-center items-center cursor-pointer'><FcGoogle /><p>Continue with Google</p></button>
                                        <button className='flex justify-center items-center cursor-pointer'><CiTwitter /><p>Continue with Twitter</p></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
