/* eslint-disable no-unused-expressions */
import "./Home.css"
import CountDownTimer from "./CountDownTimer";
import {useEffect} from "react";

export default function Hero() {
    useEffect(() => {
        let index = 0, interval = 1000;

        const rand = (min, max) =>
            Math.floor(Math.random() * (max - min + 1)) + min;

        const animate = star => {
            star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
            star.style.setProperty("--star-top", `${rand(-40, 80)}%`);

            star.style.animation = "none";
            star.offsetHeight;
            star.style.animation = "";
        }

        for(const star of document.getElementsByClassName("magic-star")) {
            setTimeout(() => {
                animate(star);

                setInterval(() => animate(star), 1000);
            }, index++ * (interval / 3))
        }
    });
    return (
        <>
            <CountDownTimer/>
            <div className="h-screen mx-auto py-32 sm:py-48 lg:py-56 bg-light-gray bg-opacity-50" id="heroSection"
                 style={{
                     backgroundImage: `url("")`,
                     backgroundSize: 'cover',
                     backgroundPosition: 'center',
                 }}
            >
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
                        UWB
                        <span> </span>
                        <span className="magic">
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                    <path
                                        d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                                </svg>
                            </span>
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                    <path
                                        d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                                </svg>
                            </span>
                            <span className="magic-star">
                                <svg viewBox="0 0 512 512">
                                <path
                                    d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z"/>
                                </svg>
                            </span>
                            <span className="magic-text">
                                Hacks In Person
                            </span>
                        </span>
                    </h1>
                </div>
                <div className="flex flex-col items-center justify-center mt-3 sm:mt-5 mx-auto text-center">
                        <span className="text-xl font-semibold text-light-purple sm:text-2xl">May 5th - 7th @ <a target="_blank" href="https://www.uwb.edu/arc" className="hover:text-yellow">UWB ARC</a></span>
                </div>
            </div>
        </>
    );
}