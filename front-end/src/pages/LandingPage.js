import React, { useState, useEffect } from 'react';
import styles from "./LandingPage.module.css";
import Cookies from "universal-cookie";
import ProgressBar from './ProgressBar';

const cookies = new Cookies();

const LandingPage = (props) => {
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
            <div className={styles.progressBar}>
                <ProgressBar/>
            </div>
        </div>
    );
}

export default LandingPage;