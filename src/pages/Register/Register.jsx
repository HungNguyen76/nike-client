import {useState} from 'react';
import api from '@api';
import { useNavigate } from 'react-router-dom';
import './register.scss';

export default function Register() {
    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const newUser = {
            user_name: e.target.user_name.value,
            email: e.target.email.value,
            first_name: e.target.first_name.value,
            last_name: e.target.last_name.value,
            password: e.target.password.value,
        };

        const validationErrors = validateInputs(newUser);
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        const result = await api.users.register(newUser);

        if (result.status !== 200) {
            alert(result.response.data.message);
        } else {
            alert(result.data !== undefined ? result.data.message : result.message);
        }
    };

    const validateInputs = (user) => {
        const errors = {};

        if (!user.user_name) {
            errors.user_name = 'User Name is required.';
        }

        if (!user.email) {
            errors.email = 'Email is required.';
        } else if (!isValidEmail(user.email)) {
            errors.email = 'Invalid email address.';
        }

        if (!user.first_name) {
            errors.first_name = 'First Name is required.';
        }

        if (!user.last_name) {
            errors.last_name = 'Last Name is required.';
        }

        if (!user.password) {
            errors.password = 'Password is required.';
        } else if (user.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long.';
        }

        return errors;
    };

    const isValidEmail = (email) => {
        // A simple email validation regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <div className='register_container'>
            <h2>Create Account</h2>
            <p>Please enter the following details to create an account.</p>
            <form onSubmit={handleFormSubmit}>
                <div className="form_control">
                    <label htmlFor="userName">User Name:</label><br />
                    <input type="text" name='user_name' id='userName' placeholder='User name' />
                    {errors.user_name && <span className="error">{errors.user_name}</span>}
                </div>
                <div className="form_control">
                    <label htmlFor="email">Email:</label><br />
                    <input type="text" name='email' id='email' placeholder='Email' />
                    {errors.email && <span className="error">{errors.email}</span>}
                </div>
                <div className="form_control">
                    <label htmlFor="firstName">First name:</label><br />
                    <input type="text" name='first_name' id='firstName' placeholder='First name' />
                    {errors.first_name && <span className="error">{errors.first_name}</span>}
                </div>
                <div className="form_control">
                    <label htmlFor="lastName">Last name:</label><br />
                    <input type="text" name='last_name' id='lastName' placeholder='Last name' />
                    {errors.last_name && <span className="error">{errors.last_name}</span>}
                </div>
                <div className="form_control">
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" name='password' id='password' placeholder='Password' />
                    {errors.password && <span className="error">{errors.password}</span>}
                </div>
                <button type='submit' className='register_btn'>Register</button>
                <button type='button' className='back_btn' onClick={() => navigate("/login")}>Back to Login Page</button>
            </form>
        </div>
    );
}
