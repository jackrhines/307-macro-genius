import React, { useState } from 'react';
import './CreateProfile.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProfile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:8000/createprofile', {
        firstName: firstName,
        lastName: lastName,
        age: age,
        sex: sex,
        height: height,
        weight: weight,
        activityLevel: activityLevel
    }).then(response => {
        localStorage.setItem('userId', response.data.userId);
        console.log(response.data);
        navigate('/profile');
    }).catch(error => {
        console.log(error);
    });
  };

  return (
    <div className="profile-card">
      <h2>Create Profile</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={e => setFirstName(e.target.value)} 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={e => setLastName(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Age" 
          value={age} 
          onChange={e => setAge(e.target.value)} 
        />
        <select value={sex} onChange={e => setSex(e.target.value)}>
          <option value="">Sex</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <input 
          type="number" 
          placeholder="Height" 
          value={height} 
          onChange={e => setHeight(e.target.value)} 
        />
        <input 
          type="number" 
          placeholder="Weight" 
          value={weight} 
          onChange={e => setWeight(e.target.value)} 
        />
        <select value={activityLevel} onChange={e => setActivityLevel(e.target.value)}>
          <option value="">Activity Level</option>
          <option value="notActive">Not Active</option>
          <option value="somewhatActive">Somewhat Active</option>
          <option value="veryActive">Very Active</option>
          <option value="extraActive">Extra Active</option>
        </select>
        <button type="submit">Create Profile</button>
      </form>
    </div>
  );
};

export default CreateProfile;
