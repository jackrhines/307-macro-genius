import React, { useState } from 'react';
import "./SignUp.css";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    return (
        <div className="body">
            <div className="calculate-page-overlap">
                <div className="top-logo-text-wrapper">MacroGenius</div>
            </div>
            <div className="signup-page"></div>
        </div>
        
    );
}

export default SignUp;