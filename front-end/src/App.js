import React from 'react'
import './App.css'
import ProfileCard from './profile/ProfileCard'
import GoalList from './profile/GoalList';
import BackButton from './profile/Back';



function App() {

    const profile = {
      name: 'Steph Curry',
      height: 188,
      weight: 185,
      age: 35,
      activityLevel: 'Very Active',
      imageUrl: 'https://cdn.nba.com/headshots/nba/latest/1040x760/201939.png'
    };

    const goals = ['Goal 1', 'Goal 2', 'Goal 3'];
    const achievements = ['Achievement 1', 'Achievement 2', 'Achievement 3'];

  
    return (
      <div className="App">
        <GoalList title="Your Goals" goals={goals} />
        <ProfileCard profile={profile} />
        <GoalList title="Your Achievements" goals={achievements} />
        <BackButton />
      </div>
    );
}

export default App;
