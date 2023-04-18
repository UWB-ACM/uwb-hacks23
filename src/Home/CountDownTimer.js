import React, { useState, useEffect } from 'react';
import './Home.css';
import Marquee from "react-fast-marquee";

function CountdownTimer() {
    const [countdown, setCountdown] = useState(Date.parse('2023-05-05T00:00:00') - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(countdown - 1000);
        }, 1000);

        return () => clearInterval(interval);
    }, [countdown]);

    const days = Math.floor(countdown / (1000 * 60 * 60 * 24));
    const hours = Math.floor((countdown / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((countdown / (1000 * 60)) % 60);

    const [playMarquee, setPlayMarquee] = useState(true);

    function handleMarquee() {
        setPlayMarquee(false);
        setTimeout(()=> {
            setPlayMarquee(true);
        }, 10);
    }

    useEffect(() => {

    }, [playMarquee]);
    return (
        <div className="countdown-timer-box py-2">
                        <Marquee play={playMarquee} gradient={false} speed={Math.log(window.screen.width) *10} onCycleComplete={handleMarquee}>{days} days, {hours} hours, {minutes} minutes until Hacking begins! &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Marquee>

        </div>
    );
}

export default CountdownTimer;