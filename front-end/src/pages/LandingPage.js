import React, { useState, useEffect } from 'react';
import styles from "./LandingPage.module.css";
import axios from "axios";
import Cookies from "universal-cookie";
import endOfDay from 'date-fns/endOfDay';
import startOfDay from 'date-fns/startOfDay';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const cookies = new Cookies();

const LandingPage = (props) => {
    // const [date, setDate] = useState(Date.now());
    const [currentUser, setCurrentUser] = useState(null);

    const current = new Date();
    const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;
    const curUser = cookies.get("USER");

    return (
        <div className={styles.body}>
            <div className={styles.profilePicture}>
                <circle className='profilePicture'/>
            </div>
            <div className={styles.landingText}>
                <div className={styles.welcomeMessage}>
                    <label>Welcome, {curUser}!</label>
                </div>
                <div className={styles.motivationalQuote}>
                    <label>"The only bad workout is the one that didn't happen."</label>
                </div>
                <div className={styles.dateWrapper}>
                    <label>{date}</label>
                </div>
            </div>
    </div>
    );
}

export default LandingPage;