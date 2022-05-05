import React, { useState } from 'react';

const Form = () => {
    let[firstName, setFirstName] = useState("");
    let[lastName, setLastName] = useState("");
    let[email, setEmail] = useState("");
    let[password, setPassword] = useState("");
    let[confirmPassword, setConfirmPassword] = useState("");

    return(
        <>
        <h2>User Form</h2>
        <form action="">
            <div className="form-group d-flex justify-content-between pt-3 pb-3 mt-4 mb-4">
                <div className="d-flex align-items-center"><label htmlFor="">First Name:</label></div>
                <div className=""><input type="text" onChange={(e)=>setFirstName(e.target.value)} className="form-control" /></div>
            </div>
            <div className="form-group d-flex justify-content-between pt-3 pb-3 mt-4 mb-4">
                <div className="d-flex align-items-center"><label htmlFor="">Last Name:</label></div>
                <div><input type="text" onChange={(e)=>setLastName(e.target.value)} className="form-control" /></div>
            </div>
            <div className="form-group d-flex justify-content-between pt-3 pb-3 mt-4 mb-4">
                <div className="d-flex align-items-center"><label htmlFor="">Email:</label></div>
                <div><input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" /></div>
            </div>
            <div className="form-group d-flex justify-content-between pt-3 pb-3 mt-4 mb-4">
                <div className="d-flex align-items-center"><label htmlFor="">Password:</label></div>
                <div><input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" /></div>
            </div>
            <div className="form-group d-flex justify-content-between pt-3 pb-2 mt-4 mb-4" id="confirm">
                <div className="d-flex align-items-center"><label htmlFor="">Confirm Password:</label></div>
                <div><input type="password" onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control" /></div>
            </div>
        </form>
        <hr />
        <h4>Your Form Data</h4>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </>
    )
}

export default Form