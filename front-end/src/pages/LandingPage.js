import React, { useState } from 'react';
import styles from "./LandingPage.module.css";
import axios from "axios";

const LandingPage = (props) => {
    return (
        <div className={styles.body}>
            <div className={styles.profilePicture}>
                <circle></circle>
            </div>
            <div className={styles.motivationalQuote}>
                <label>"The only bad workout is the one that didn't happen."</label>
            </div>
    </div>
    );
}

export default LandingPage;