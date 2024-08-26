import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
            const users = JSON.parse(storedUsers);
            const user = users.find((user: any) => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            console.log('User logged in successfully', user);
            navigate('/pocetna');
        } else {
            alert('Invalid username or password');
        }
    }
    };

    return (
        <div className="login-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <p>Ulogujte se na vaš nalog</p>
                
                <div className="input-group">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required 
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>

                <button type="submit" className="login-button">LOGIN</button>
            </form>
            <p>Zaboravljena lozinka?</p>
            <hr />
            <p className="signup-link">Nemate nalog? <a href="/signup">Registrujte se</a></p>
        </div>
    );
};

export default Login;
