import React, {useCallback, useRef} from 'react';
import emailjs from '@emailjs/browser';
import options from "./particleConfig";
import Particles from "react-particles";
import {loadFull} from "tsparticles";

export const ContactUs = () => {
    const form = useRef();

    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_0c4cj1h', 'template_qf9z2le', form.current, '9Adr6lRV6xDB5NuvM')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className="overflow-hidden flex flex-col items-center justify-center">
            <Particles className="particles" options={options} init={particlesInit} />
            <div className="flex shadow-md overflow-hidden border-1 rounded-xl mx-auto mt-5 flex-col sm:w-1/2 bg-light-purple">
                <form ref={form} onSubmit={sendEmail} className="w-full px-5 py-3">
                    <div className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-1 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mb-3 text-center"> CONTACT FORM </div>
                    <label htmlFor="name" className="font-SecularOne block text-3xl font-medium leading-6 text-white  pt-3">
                        Name
                    </label>
                    <input type="text" name="name" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full"/>

                    <label htmlFor="email" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Email
                    </label>
                    <input type="email" name="user_email" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full"/>

                    <label htmlFor="message" className="font-SecularOne block text-3xl font-medium leading-6 text-white pt-4">
                        Message
                    </label>
                    <textarea name="message" className="relative mt-2 rounded-md shadow-sm border-1 text-xl w-full h-40"/>

                    <div className="pt-4 pb-2">
                        <button
                            className="bg-white text-blue-700 font-semibold py-2 px-4 rounded w-full">
                            <input type="submit" value="Send" className="text-2xl"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};