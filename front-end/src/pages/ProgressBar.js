import React, { useState } from "react";
import styles from "./ProgressBar.module.css";
import Cookies from "universal-cookie";

// const cookies = new Cookies();

const ProgressBar = (props) => {
    // const [progress, setProgress] = useState(0);

    const progress = props.calories / props.goal * 100;

    const getColor = (percent) => {
        console.log(props.calories)
        if (percent < 30) return "red";
        else if (percent < 70) return "yellow";
        else return "green";
    }

    const color = getColor(progress);
    const progressWidth = `${progress}%`;

    return (
        <div className={styles.container}>
            <div className={styles.progressbar}>
                <div className={styles.progress} style={{ "--progress-width": progressWidth, "--progress-color": color }}></div>
            </div>
            <div className={styles.progressText}>Progress: {progress}%</div>
            <div className={styles.progressText}>Calories Consumed:</div>
            <div className={styles.progressText}>{props.calories} / {props.goal}</div>
        </div>
    );
}

export default ProgressBar;