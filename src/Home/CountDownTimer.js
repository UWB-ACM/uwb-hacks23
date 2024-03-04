import React, { useState, useEffect } from 'react';
import './Home.css';
import Marquee from "react-fast-marquee";
import pawLogo from './media/paw.png';

function CountdownTimer() {
    // Set the start date for the hackathon
    const startDate = new Date('2024-04-26T00:00:00Z');
    // Calculate the difference between the current time and the start date
    const [countdown, setCountdown] = useState(startDate - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(startDate - Date.now());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Convert the countdown from milliseconds to days, hours, and minutes
    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((countdown / (1000 * 60)) % 60);

    // Control the Marquee play state
    const [playMarquee, setPlayMarquee] = useState(true);

    function handleMarquee() {
        setPlayMarquee(false);
        setTimeout(() => {
            setPlayMarquee(true);
        }, 10);
    }

    // Display different messages based on whether the hackathon has started
    if (countdown <= 0) {
        // Hackathon has started
        return (
            <div className="countdown-timer-box py-2">
                <Marquee play={playMarquee} gradient={false} speed={50} onCycleComplete={handleMarquee}>
                    Hackathon is underway! Happy hacking! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Marquee>
            </div>
        );
    } else {
        // Countdown to hackathon start
        return (
            <div className="countdown-timer-box py-2">
                <Marquee play={playMarquee} gradient={false} speed={50} onCycleComplete={handleMarquee}>
                    {days} days until Hacking begins
                    <img src={pawLogo} alt="Paw" className="paw-icon" /> {/* Add this line */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </Marquee>
            </div>
        );
    }
}

export default CountdownTimer;
