import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfileCard.module.css';
import Cookies from 'universal-cookie';

const cookies = new Cookies();
const id = cookies.get("PROFILE");

const ProfileCard = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        age: '',
        sex: '',
        height: '',
        weight: '',
        activityLevel: ''
    });


    useEffect(() => {
        axios.get('http://localhost:8000/userprofile/' + id)
        .then(response => {
            setProfile(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []); 

    return (
        <div className="profile-card">
            <div className="profile-info">
                <p className="info-item">{`Name: ${profile.firstName} ${profile.lastName}`}</p>
                <p className="info-item">{`Age: ${profile.age}`}</p>
                <p className="info-item">{`Sex: ${profile.sex}`}</p>
                <p className="info-item">{`Height: ${profile.height}`}</p>
                <p className="info-item">{`Weight: ${profile.weight}`}</p>
                <p className="info-item">{`Activity Level: ${profile.activityLevel}`}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
