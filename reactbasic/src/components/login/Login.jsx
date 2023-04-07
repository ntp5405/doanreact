import React, { useState } from 'react';
import Cookies from 'js-cookie';
import * as apiGetToken from "../Http/apiServices/apiGetToken";
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./login.css"

function Login() {
    const [messError, setMessError] = useState(false);
    const token = Cookies.get('token');

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        async function fetch() {
            const getToken = async () => {
                const result = await apiGetToken.token(data);
                if (result.status === 200) {
                    Cookies.set('token', result.data.token, {
                        expires: new Date(Date.now() + 20 * 60 * 1000),
                        path: '/',
                        secure: true,
                    });
                    navigate('/');
                } else if (result === 1) {
                    setMessError(true)
                }
            }
            await getToken()
            const getUser = async () => {
                const result = await apiGetToken.getCurrentUser(Cookies.get('token'));
                if (result.status === 200) {
                    await localStorage.setItem('user', JSON.stringify(result.data));
                    navigate('/');
                    console.log('Đăng nhập thành công');
                }
            };
            await getUser();
        }
        fetch()
    }

    let navigate = useNavigate();


    if (token) {
        return <Navigate to="/" />;
    } else {
        return (
            <div className="login-page1">
                <div className="form1">
                    <form className="login-form1" onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" placeholder='username' {...register("email", { required: true })} />
                        {errors.email && <p className='error'>This field is required</p>}
                        <input type="password" placeholder='password' {...register("password", { required: true })} />
                        {errors.password && <p className='error'>This field is required</p>}
                        {messError && <p className='error'>Sai tai khoan hoac mat khau</p>}
                        <button type='submit'>login</button>
                        <p className="message1">Not registered? <Link to="/register">Register</Link></p>
                        <p className="message1"><Link to="/">Back to Homepage</Link></p>
                    </form>
                </div>
            </div>
        )
    }

}

export default Login