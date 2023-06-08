import React, { useState, useEffect } from "react";
import styles from "./LandingPage.module.css";
import Cookies from "universal-cookie";
import ProgressBar from "./ProgressBar";
import startOfDay from "date-fns/startOfDay";
import endOfDay from "date-fns/endOfDay";
import axios from "axios";

const cookies = new Cookies();

const LandingPage = (props) => {
  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }/${current.getDate()}/${current.getFullYear()}`;
  const curUser = cookies.get("USER");
  const id = cookies.get("PROFILE");

  const [calories, setCalories] = useState(0);
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    age: "",
    sex: "",
    height: "",
    weight: "",
    activityLevel: "",
    calorieGoal: "",
  });

  useEffect(() => {
    fetchFoods(curUser).then((result) => {
      if (result) {
        console.log(result);
        let sum = 0;
        for (const food of result) sum += food.calories;

        console.log(sum);
        setCalories(sum);
      }
    })

    fetchProfile(id).then((result) => {
      if (result)
        setProfile(result)
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function fetchFoods(user) {
    try {
      const start = startOfDay(Date.now());
      const end = endOfDay(Date.now());

      const response = await axios.get(
        "https://macrogenius.azurewebsites.net/foods?user=" +
          user +
          "&startDate=" +
          start.toString() +
          "&endDate=" +
          end.toString()
      );
      return response.data.foods_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  async function fetchProfile(id) {
    try {
      const response = await axios.get('https://macrogenius.azurewebsites.net/userprofile/' + id)
      console.log(response)
      return response.data
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  return (
    <div className={styles.body}>
      <div className={styles.landingText}>
        <div className={styles.welcomeMessage}>
          <label>Welcome, {curUser}!</label>
        </div>
        {/*<div className={styles.motivationalQuote}>*/}
        {/*    <label>"The only bad workout is the one that didn't happen."</label>*/}
        {/*</div>*/}
        <div className={styles.dateWrapper}>
          <label>{date}</label>
        </div>
      </div>
      <div className={styles.progressBar}>
        <ProgressBar calories={calories} goal={profile.calorieGoal} />
      </div>
      <ul className="logfoods">
        <li><a href="/food">Log Foods</a></li>
      </ul>
      
    </div>
  );
};

export default LandingPage;
