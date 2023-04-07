import React, { useState } from 'react'
import { Link, useNavigate, Navigate } from "react-router-dom";
import * as apiRegister from "../Http/apiServices/apiRegister";
import Cookies from 'js-cookie';
import "../login/login.css"
import { useForm } from "react-hook-form";


function Register() {
    const token = Cookies.get('token');

    let navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        async function fetch() {
            const result = await apiRegister.Requestregister(data)
            if (result.status === 200) {
                navigate('/Login');
            }
            console.log(result)
        }
        fetch()
    }

    return (
        <div className="login-page1">
            <div className="form1">
                <form onSubmit={handleSubmit(onSubmit)} className="login-form1">
                    <input type="text" placeholder="email" {...register("email", { required: true })} />
                    {errors.email && <p className='error'>This field is required</p>}
                    <input type="text" placeholder="username" {...register("name", { required: true })} />
                    {errors.name && <p className='error'>This field is required</p>}
                    <input type="password" placeholder="password" {...register("password", { required: true })} />
                    {errors.password && <p className='error'>This field is required</p>}
                    <button type=''>Create</button>
                    <p className="message1">Already Registered? <Link to="/login">Login</Link></p>
                    <p className="message1"><Link to="/">Back to Homepage</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Register