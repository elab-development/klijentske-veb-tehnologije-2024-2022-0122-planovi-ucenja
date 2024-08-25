import React, { useState } from 'react';
import User from '../models/User';
import './SignUp.css';

const SignUp: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        email: '',
        password: '',
        retypePassword: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newUser = new User(
            formData.firstName,
            formData.lastName,
            formData.username,
            formData.email,
            formData.password
        );

        if (newUser.validatePassword(formData.retypePassword)) {
            console.log('User registration successful', newUser);
        } else {
            console.error('Passwords do not match');
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
                <h2>SIGN UP</h2>
                <p>Ulogujte se na vaš nalog</p>
                <div className="input-group">
                    <input 
                        type="text" 
                        name="firstName" 
                        placeholder="First name" 
                        value={formData.firstName}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last name" 
                        value={formData.lastName}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={formData.username}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={formData.password}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="password" 
                        name="retypePassword" 
                        placeholder="Retype password" 
                        value={formData.retypePassword}
                        onChange={handleChange}
                        required 
                    />
                </div>

                <button type="submit" className="signup-button">SIGN UP</button>
            </form>
            <hr />
            <p className="login-link">Već imate nalog? Ulogujte se</p>
        </div>
    );
};

export default SignUp;