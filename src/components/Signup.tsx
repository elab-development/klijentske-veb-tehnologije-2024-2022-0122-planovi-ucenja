import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from '../models/User';
import './SignUp.css';

const SignUp: React.FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [users, setUsers] = useState<User[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        const storedUsers = localStorage.getItem('users');
        if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
        }
    }, []);

    const handleSubmit= (e: React.FormEvent) => {
        e.preventDefault();
        const newUser: User = new User(firstName,lastName,username, email, password);
        const updatedUsers = [...users, newUser];
        setUsers(updatedUsers);

        localStorage.setItem('users', JSON.stringify(updatedUsers));

        console.log('Registered Users:', updatedUsers);

        setFirstName('');
        setLastName('');
        setUsername('');
        setEmail('');
        setPassword('');
        setRetypePassword('');

        navigate('/login');
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
                        value={firstName}
                        required 
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="text" 
                        name="lastName" 
                        placeholder="Last name" 
                        value={lastName}
                        required 
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        value={username}
                        required 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email" 
                        value={email}
                        required 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        value={password}
                        required 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <input 
                        type="password" 
                        name="retypePassword" 
                        placeholder="Retype password" 
                        value={retypePassword}
                        required 
                        onChange={(e) => setRetypePassword(e.target.value)}
                    />
                </div>

                <button type="submit" className="signup-button">SIGN UP</button>
            </form>
            <hr />
            <p className="login-link">Već imate nalog? <a href="/login">Ulogujte se</a></p>
        </div>
    );
};

export default SignUp;