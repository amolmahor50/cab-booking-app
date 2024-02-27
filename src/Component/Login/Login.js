import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';

function Login(props) {

    //if login the page then we will navigate the page
    const navigate = useNavigate();

    //initilize the get data values and save the data
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    //password show and hide toggle
    const [showPass, setShowPass] = useState(false);

    //password show and hide toggle button
    function showPassword() {
        setShowPass((showPass) => !showPass);
    }

    //thow the form Error
    const [error, setError] = useState('');

    //get every properties data
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData, [name]: value
        })
    }

    //form sumbit operation perform
    const handleSubmit = (e) => {
        e.preventDefault()
        const validationError = {}
        if (!formData.email.trim()) {
            validationError.email = 'Email is required';
        }
        let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!regEmail.test(formData.email)) {
            validationError.email = 'Email is not Valid';
        }
        if (!formData.password.trim()) {
            validationError.password = 'Password is required';
        }
        else if (formData.password.length < 6) {
            validationError.password = 'Password should be at least 6 char'
        }

        setError(validationError);

        if (Object.keys(validationError).length === 0) {
            alert('Form Sumbited Successfully....!');
            sessionStorage.setItem('isAuth', true);
            sessionStorage.setItem('email', formData.email);
            props.setIsAuth(true);
            navigate("/dashboard");
        }
    }
    return (
        <div className="container">
                <form className='form' onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="input-field">
                        <i className="fa-solid fa-envelope"></i>
                        <input type="email" name="email" placeholder=" Email@123" onChange={handleChange} />
                    </div>
                    {error.email && <p className='error'>{error.email}</p>}
                    <div className="input-field password-field">
                        <i className="fa-solid fa-lock"></i>
                        <input type={showPass ? 'text' : 'password'} name="password" placeholder="Password" onChange={handleChange} />
                        <i style={{ marginLeft: '90px', cursor: 'pointer' }} className="fa-solid fa-eye show" onClick={showPassword}></i>
                    </div>
                    {error.password && <p className='error'>{error.password}</p>}
                    <p>Forgot Password?<a href='#' className='signIn'>Click Here!</a></p>
                    <button type="submit" name="submit" value="submit">Login</button>
                    <div className="login1">
                        <p>Don't have an account?<a href='#' className='signIn'>Registation Now</a></p>
                    </div>
                </form>
        </div>
    )
}

export default Login