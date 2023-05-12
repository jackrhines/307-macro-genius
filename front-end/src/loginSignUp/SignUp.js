import React, { useState } from 'react';
import "./SignUp.css";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    return (
        <div className="signup-page"></div>
    );
}