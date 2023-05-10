
import React, { useState } from 'react';
import "./App.css"



const App = () => {
    const [age, setAge] = useState(0);
    const [sex, setSex] = useState('select');
    const [heightInches, setHeightInches] = useState(0);
    const [weight, setWeight] = useState(0);
    const [activityLevel, setActivityLevel] = useState(0);
    const [calorieIntake, setCalorieIntake] = useState(0);

    function calculateCalorieIntake() {
        // Harris-Benedict equation
        let bmr = 0;
        if (sex === 'select'){
            bmr = 0;
        }
        else if (sex === 'male') {
            bmr = 88.362 + (13.397 * (weight * 0.453592)) + (4.799 * (heightInches * 2.54)) - (5.677 * age);
        } else if (sex === 'female') {
            bmr = 447.593 + (9.247 * (weight * 0.453592)) + (3.098 * (heightInches * 2.54)) - (4.330 * age);
        } 
        let activityFactor = 1;
        if (activityLevel === 'low') {
            activityFactor = 1.2;
        } else if (activityLevel === 'medium') {
            activityFactor = 1.55;
        } else if (activityLevel === 'high') {
            activityFactor = 1.725;
        }
        let dailyCalories = bmr * activityFactor;
        setCalorieIntake(dailyCalories.toFixed(0));
    }

    function convertToFeet(heightInches) {
        let feet = Math.floor(heightInches / 12);
        let inches = heightInches % 12;
        return feet + "'" + inches + "\"";
    }

    function handleSubmit(event) {
        event.preventDefault();
        calculateCalorieIntake();
    }

    
    return (
        <div className="body">
            <div className="calculate-page-overlap">
                <div className="top-logo-text-wrapper">MacroGenius</div>
            </div>
            <div className="calculate-page-grey-body">
                <h2> Calorie Calculator</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Age:
                        <br />
                        <input
                            type= "number"
                            value= {age}
                            onChange= {event => setAge(event.target.value)}
                        />
                    </label>
                    <br />
                    <label>
                        Sex:
                        <br />
                        <select value= {sex} onChange= {event => setSex(event.target.value)}>
                            <option value="select" >Select</option>
                            <option value= "male" >Male</option>
                            <option value= "female" >Female</option>
                        </select>
                    </label>
                    <br />
                    <label>
                        Height (inches):
                        <br />
                        <input
                            type= "number"
                            value= {heightInches}
                            onChange= {event => setHeightInches(event.target.value)}
                        />
                        <input 
                            type= "text"
                            value= {convertToFeet(heightInches)}
                            readOnly
                        />
                    </label>
                    <br />
                    
                    <label>
                        Weight (lbs):
                        <br />
                        <input
                            type= "number"
                            value= {weight}
                            onChange= {event => setWeight(event.target.value)}
                            />
                    </label>
                    <br />
                    <label>
                        Activity Level:
                        <br />
                        <select
                            value= {activityLevel}
                            onChange= {event => setActivityLevel(event.target.value)}
                        >
                            <option value = "">Select an option below</option>
                            <option value = "low">Low (little or no exercise)</option>
                            <option value = "medium">Medium (exercise 3-5 days/week)</option>
                            <option value = "high">High (exercise 6-7 days/week)</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit" onClick={handleSubmit}>Calculate</button>
                    
                </form>

                <div className="calculate-page-result-body">
                    {
                    <div className= "calculate-pagae-result-text-wrapper">
                    Your average daily calorie intake: {calorieIntake}
                    </div>
                    }
                        
                        
                </div>
                
            </div>
        </div>
    );
}

export default App;

