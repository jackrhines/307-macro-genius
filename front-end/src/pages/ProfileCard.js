import React from 'react';
import './ProfileCard.css';

const ProfileCard = ({ profile }) => {
  const { name, height, weight, age, activityLevel, imageUrl } = profile;

  return (
    <div className="profile-card">
      <div className="image-container">
        <img className="profile-image" src={imageUrl} alt="Profile" />
      </div>
      <div className="profile-info">
        <div className="info-item">Name: {name}</div>
        <div className="info-item">Height: {height} cm</div>
        <div className="info-item">Weight: {weight} lbs</div>
        <div className="info-item">Age: {age} years</div>
        <div className="info-item">Activity Level: {activityLevel}</div>
      </div>
    </div>
  );
};

export default ProfileCard;