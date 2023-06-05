import React, { useState } from "react";
import styles from "./Calculate.module.css";

const CalculatePage = () => {
  const [age, setAge] = useState(0);
  const [sex, setSex] = useState("select");
  const [heightInches, setHeightInches] = useState(0);
  const [weight, setWeight] = useState(0);
  const [activityLevel, setActivityLevel] = useState(0);
  const [calorieIntake, setCalorieIntake] = useState(0);

  function calculateCalorieIntake() {
    // Harris-Benedict equation
    let bmr = 0;
    if (sex === "select") {
      bmr = 0;
    } else if (sex === "male") {
      bmr =
        88.362 +
        13.397 * (weight * 0.453592) +
        4.799 * (heightInches * 2.54) -
        5.677 * age;
    } else if (sex === "female") {
      bmr =
        447.593 +
        9.247 * (weight * 0.453592) +
        3.098 * (heightInches * 2.54) -
        4.33 * age;
    }
    let activityFactor = 1;
    if (activityLevel === "low") {
      activityFactor = 1.2;
    } else if (activityLevel === "medium") {
      activityFactor = 1.55;
    } else if (activityLevel === "high") {
      activityFactor = 1.725;
    }
    let dailyCalories = bmr * activityFactor;
    setCalorieIntake(dailyCalories.toFixed(0));
  }

  function convertToFeet(heightInches) {
    let feet = Math.floor(heightInches / 12);
    let inches = heightInches % 12;
    return feet + "'" + inches + '"';
  }

  function handleSubmit(event) {
    event.preventDefault();
    calculateCalorieIntake();
  }

  return (
    <div className={styles.body}>
      <div className={styles.calculatePageOverlap}>
        <div className={styles.topLogoTextWrapper}>MacroGenius</div>
        <ul className={styles.calculateNavigateMenu}></ul>
      </div>
      <div className={styles.calculatePageGreyBody}>
        <h2 className={styles.h2}> Calorie Calculator</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Age:
            <br />
            <input
              className={styles.input}
              type="number"
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </label>
          <br />
          <label className={styles.label}>
            Sex:
            <br />
            <select
              value={sex}
              onChange={(event) => setSex(event.target.value)}
            >
              <option value="select">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <br />
          <label className={styles.label}>
            Height (inches):
            <br />
            <input
              className={styles.input}
              type="number"
              value={heightInches}
              onChange={(event) => setHeightInches(event.target.value)}
            />
            <input
              className={styles.input}
              type="text"
              value={convertToFeet(heightInches)}
              readOnly
            />
          </label>
          <br />

          <label className={styles.label}>
            Weight (lbs):
            <br />
            <input
              className={styles.input}
              type="number"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
            />
          </label>
          <br />
          <label className={styles.label}>
            Activity Level:
            <br />
            <select
              value={activityLevel}
              onChange={(event) => setActivityLevel(event.target.value)}
            >
              <option value="">Select an option below</option>
              <option value="low">Low (little or no exercise)</option>
              <option value="medium">Medium (exercise 3-5 days/week)</option>
              <option value="high">High (exercise 6-7 days/week)</option>
            </select>
          </label>
          <br />
          <button
            className={styles.button}
            type="submit"
            onClick={handleSubmit}
          >
            Calculate
          </button>
        </form>

        <div className={styles.calculatePageResultBody}>
          {
            <div className={styles.calculatePageResultTextWrapper}>
              Your average daily calorie intake: {calorieIntake}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default CalculatePage;
