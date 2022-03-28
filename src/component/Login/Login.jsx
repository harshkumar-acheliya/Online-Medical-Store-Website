import React from 'react'
import { useState } from 'react';
import './Login.css'
function Login() {


    const [values,setValues]=useState({
        phonenumber:"",
        password:""
        
    });
    const handleChange=(e)=>{
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    };
    async function logIn() {
        let items={values}
        console.warn(items)
        
        let result=await fetch("https://medmarket.co.in/api/accounts/login/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(values)

        })
        
        // setErrors(Validation(values));
        result=await result.json();
        console.warn("result",result)

    }

    return (
        <div>
            <div className="login-container">
                <div className="l-login-container">
                    <img src="./signup_image.png" alt="login Image" />
                </div>
                <div className="r-login-container">
                    <div className="r-upper-login">
                        <h1>Sign In / Sign Up</h1>
                    </div>
                    <div className="r-middle-login">
                        <h3>Sign up or Sign in to access your orders,special offers,health tips and more !</h3>
                    </div>
                    <div className="r-form-login">
                        <form action="/">
                            <label id='login-label' htmlFor="Phone Number">Phone Number</label><br />
                             
                            <input type="number" placeholder='Enter Your Phone Number' value={values.phonenumber} onChange={handleChange} name="phonenumber" id="phonenumber" />

                            <label className='signup-label' htmlFor="password">Password</label><br />
                            <input className='form-input-field' type="password" value={values.password}   placeholder='Enter your Password' onChange={handleChange} name="password" id="password" /><br />
                            {/* {errors.password && <p className='error'>{errors.password}</p>} */}
                            
                            
                        </form>
                    </div>
                    <div className="r-text1-login-container">
                        <h4>We have sent 6 digit OTP</h4>
                    </div>
                    <div className="r-inputField-container">
                        <input className="inputField" type="text" maxLength={1}/>
                        <input className="inputField" type="text" maxLength={1}/>
                        <input className="inputField" type="text" maxLength={1}/>
                        <input className="inputField" type="text" maxLength={1}/>
                        <input className="inputField" type="text" maxLength={1}/>
                        <input className="inputField" type="text" maxLength={1}/>

                    </div>
                    <div className="r-text1-login-container">
                        <h4>Waiting for OTP 60 sec</h4>
                    </div>
                    <div className="r-text2-login-container">
                        <h4> <a href="/">Resend OTP</a> </h4>
                    </div>
                   
                    <button onClick={logIn} id='continue-btn' className="r-login-btn">
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login
