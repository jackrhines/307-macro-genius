import React from 'react';
import './ProfileCard.module.css';

const ProfileCard = (props) => {
    return (
        <div className="profile-card">
            <div className="profile-info">
                <p className="info-item">{`Name: ${props.profile.firstName} ${props.profile.lastName}`}</p>
                <p className="info-item">{`Age: ${props.profile.age}`}</p>
                <p className="info-item">{`Sex: ${props.profile.sex}`}</p>
                <p className="info-item">{`Height: ${props.profile.height}`}</p>
                <p className="info-item">{`Weight: ${props.profile.weight}`}</p>
                <p className="info-item">{`Activity Level: ${props.profile.activityLevel}`}</p>
                <p className="info-item">{`Calorie Goal: ${props.profile.calorieGoal}`}</p>
            </div>
        </div>
    );
};

export default ProfileCard;
