import React, { useState } from 'react';
import './Profile.css';
import Navbar from './Navbar';
import profileImg from '../assets/avatar.png';
import { User } from '../models/User';

const Profile: React.FC = () => {
    const [user] = useState<User | null>(() => {
        const storedUser = localStorage.getItem('loggedInUser');
        return storedUser ? JSON.parse(storedUser) : null;
    });


    return (
        <>
            <Navbar />
            <div className="profile-container">
                <div className="profile-form">
                    <h2>Profil</h2>
                    <div className='polje'><p>Ime:</p><p>{user?.firstName}</p></div>
                    <div className='polje'><p>Prezime:</p><p>{user?.lastName || 'N/A'}</p></div>
                    <div className='polje'><p>Username:</p><p>{user?.username || 'N/A'}</p></div>
                    <div className='polje'><p>Email:</p><p>{user?.email || 'N/A'}</p></div>
                </div>
                <div className="profile-avatar">
                    <div className="avatar">
                        <img src={profileImg} alt="avatar" />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;