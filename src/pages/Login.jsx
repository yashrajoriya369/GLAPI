import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { IoEyeOutline } from "react-icons/io5";
import loginBanner from "../images/banner.jpg"


const Login = () => {
    return (
        <>
            <div className='main-container w-full h-screen bg-zinc-900 text-white'>
                <div className='subcontainer'>
                    <div className='form-container'>
                        <div className='image-banner'></div>
                        <div className='login-form'>
                            <h2>Login</h2>
                            <form>
                                <label for='email'>
                                    <input className='' type='email' name='email' placeholder='example@email.com' />
                                    <span className='input-icon'><AiOutlineMail />
                                    </span>
                                </label>
                                <label for='password'>
                                    <input className='' type='password' name='password' placeholder='*********' />
                                    <span className='input-icon'><IoEyeOutline /></span>
                                </label>
                                <button className='login-btn bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent rounded' type='submit'>Login</button>
                            </form>
                        </div>
                    </div>
                    <div className='image-banner'><img src={loginBanner} alt='image-banner' /></div>
                </div>
            </div>
        </>
    )
}

export default Login
