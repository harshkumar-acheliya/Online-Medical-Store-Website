import React from 'react'

function Validation(values) {
    let errors={};
    if(!values.full_name){
        errors.full_name="Name is required"
    }else if(!/^[a-zA-Z, ]*$/.test(values.full_name)){
        errors.full_name="No special character allowed"
    }
    if(!values.email){
        errors.email="email is required"
    }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email="Email is Invalid"
    }


    if(!values.phonenumber){
        errors.phonenumber="Phone number is required"
    }else if(values.phonenumber.length<10 || values.phonenumber.length>10){
        errors.phonenumber="Enter valid PhoneNumber"
    }
    if(!values.password){
        errors.password="password is required";
    }else if(values.password.length<5){
        errors.password="Password must be more than five characters"
    }
    if(!values.cpassword){
        errors.cpassword="cpassword is required"
    }else if(values.cpassword!=values.password){
        errors.cpassword="Both password must be same"
    }
    return errors;
}

export default Validation
