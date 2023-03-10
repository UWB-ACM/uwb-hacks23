import React, { useState, useEffect } from 'react';
import './App.css';

function CountdownTimer() {
    const [countdown, setCountdown] = useState(Date.parse('2023-04-16T00:00:00') - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown - 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((countdown / (1000 * 60)) % 60);
    const seconds = Math.floor((countdown / 1000) % 60);

    return (
        <div className="countdown-timer-box">
            <p>{days} days, {hours} hours, {minutes} minutes, {seconds} seconds until 4/16 (Deadline for website)</p>
        </div>
    );
}

export default CountdownTimer;
