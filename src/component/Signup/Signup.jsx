import React from 'react'
import {useState} from 'react'
import './Signup.css'
import Validation from './Validation';
// import {useHistory} from 'react-router-dom'
function Signup() {

    const [values,setValues]=useState({
        phonenumber:"",
        full_name:"",
        email:"",
        password:"",
        cpassword:""
    });

    const [errors,setErrors]=useState({});
    // const [issubmit,setIssubmit]=useState(false);

    const handleChange=(e)=>{
        // setIssubmit(true);
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }
    // useEffect(() => {
    //     if(values.keys(errors).length===0 && issubmit){

            

    //     }
        
    // }, [errors])

    
    async function signUp() {
        let items={values}
        console.warn(items)
        
        let result=await fetch("https://medmarket.co.in/api/accounts/signup/",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(values)

        })
        
        setErrors(Validation(values));
        result=await result.json();
        console.warn("result",result)

    }

    return (
        <div>
            <div className="signup-container">
                <div className="l-signup-container">
                    <img src="./signup_image.png" alt="Signup Image" />
                </div>
                <div className="r-signup-container">
                    <div className="r-upper-signup">
                        <h1>Sign In / Sign Up</h1>
                    </div>
                    <div className="r-middle-signup">
                        <h3>Sign up or Sign in to access your orders,special offers,health tips and more !</h3>
                    </div>
                    <div className="r-form-signup">
                        
                            
                            {/* <span id="signup-change-text"> <input type="reset" value="Change" /> </span> */}

                            <label className='signup-label' htmlFor="fullname">Full Name</label><br />
                            <input className='form-input-field' type="text" value={values.full_name} onChange={handleChange} placeholder='Enter your fullname' name="full_name" id="fullname" /><br />
                            {errors.full_name && <p className='error'>{errors.full_name}</p>}

                            <label className='signup-label' htmlFor="email">Email</label><br />
                            <input className='form-input-field' type="email" value={values.email} onChange={handleChange} placeholder='Enter your Email' name="email" id="email" /><br />
                            {errors.email && <p className='error'>{errors.email}</p>}
                            <label className='signup-label' htmlFor="Phone Number">Phone Number</label><br />
                             
                            <input type="number" value={values.phonenumber} onChange={handleChange} placeholder='Enter Your Phone Number' name="phonenumber" id="phnNumber" /><br />
                            {errors.phonenumber && <p className='error'>{errors.phonenumber}</p>}

                            <label className='signup-label' htmlFor="password">Password</label><br />
                            <input className='form-input-field' type="password" value={values.password} onChange={handleChange} placeholder='Enter your Password' name="password" id="password" /><br />
                            {errors.password && <p className='error'>{errors.password}</p>}

                            <label className='signup-label' htmlFor="cpassword">Confirm Password</label><br />
                            <input className='form-input-field' type="password" value={values.cpassword} onChange={handleChange} placeholder='Confirm your Password' name="cpassword" id="cpassword" /><br />
                            {errors.cpassword && <p className='error'>{errors.cpassword}</p>}
                        
                    </div>
                    <div className="r-text1-signup-container">
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
                    <div className="r-text1-signup-container">
                        <h4>Waiting for OTP 60 sec</h4>
                    </div>
                    <div className="r-text2-signup-container">
                        <h4> <a href="/">Resend OTP</a> </h4>
                    </div>
                    <button id='verify-btn' onClick={signUp} className="r-signup-btn">
                        Verify
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Signup
