import React, { useState, useEffect } from 'react';
import styles from "./LandingPage.module.css";
import Cookies from "universal-cookie";
import ProgressBar from './ProgressBar';
import ProfileCard from './ProfileCard';
import startOfDay from "date-fns/startOfDay";
import endOfDay from "date-fns/endOfDay";
import axios from "axios";

const cookies = new Cookies();

const LandingPage = (props) => {
  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
  const curUser = cookies.get("USER");
  const [calories, setCalories] = useState(0);

  useEffect(() => {
    fetchAll(curUser).then( result => {
      if (result) {
        console.log(result)
        let sum = 0;
        for (const food of result)
          sum += food.calories;

        console.log(sum)
        setCalories(sum);
      }


    });
  }, []);

  async function fetchAll(user){
    try {
      const start = startOfDay(Date.now());
      const end = endOfDay(Date.now());

      const response = await axios.get('http://localhost:8000/foods?user=' + user
        + '&startDate=' + start.toString() + '&endDate=' + end.toString());
      return response.data.foods_list;
    }
    catch (error){
      //We're not handling errors. Just logging into the console.
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
                <div className={styles.motivationalQuote}>
                    <label>Keep up the progress! You got it!</label>
                </div>
                <div className={styles.dateWrapper}>
                    <label>{date}</label>
                </div>
            </div>
            <div className={styles.progressBar}>
                <ProgressBar calories={calories} goal={2000}/>
            </div>
            <div className={styles.ProfileCard}>
                <ProfileCard/>
            </div>
        </div>
    );
}

export default LandingPage;