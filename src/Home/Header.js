import React, { useState } from 'react'
import { Dialog, Popover } from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRocket } from "@fortawesome/free-solid-svg-icons";
import CountdownTimer from "./CountDownTimer";
import uwbHacksLogo from './media/uwbhacksai2024.png';


export default function Header() {
    const [isHeaderButtonHovered, setIsHeaderButtonHovered] = useState(false);
    const handleHeaderButtonMouseEnter = () => setIsHeaderButtonHovered(true);
    const handleHeaderButtonMouseLeave = () => setIsHeaderButtonHovered(false);

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


    function handleCloseMenu() {
        setMobileMenuOpen(false);
    }

    const location = useLocation();

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };


    if (location.pathname === "/uwb-hacks23/Contact" || location.pathname === "/uwb-hacks23/Registration" || location.pathname === "/uwb-hacks23/Login") {
        return (
            <>
                <header className="h-20 flex justify-end ">
                    <div className="px-5 py-4">
                        {!isHovered ? (
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <NavLink
                                    to="/uwb-hacks23"
                                    className="text-lg font-semibold leading-6 text-purple pt-5 px-1 hover:text-orange"
                                >
                                    Return to Home
                                    <span> </span>
                                    <FontAwesomeIcon icon={faRocket} style={{ color: "purple" }} />
                                </NavLink>
                            </div>

                        ) : (
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={() => setIsHovered(false)}>
                                <NavLink
                                    to="/uwb-hacks23"
                                    className="text-lg font-semibold leading-6 text-orange pt-5 px-1 hover:text-orange"
                                >
                                    Return to Home
                                    <span> </span>
                                    <FontAwesomeIcon icon={faRocket} beat style={{ color: "orange" }} />
                                </NavLink>
                            </div>
                        )}
                    </div>
                </header>
                <CountdownTimer />
            </>
        )
    }

    return (
        <header className={`bg-purple`}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between  lg:px-8 h-[84px]" aria-label="Global">
                <div className="flex lg:flex-1 h-full items-center"> {/* Use items-center to vertically center your image */}
                    <img className="h-16 md:h-28" src={uwbHacksLogo} alt="UWB Hacks Logo" />
                </div>
                <div className="flex lg:hidden ">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5  hover:bg-light-purple mr-3.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>

                <Popover.Group className="hidden lg:flex h-full items-center justify-between">
                    <Link to="aboutSection"
                        smooth={'easeInOutQuint'}
                        duration={200}
                        offset={0}
                        className="font-stacker text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-blue h-full transition duration-500">
                        <div className="text-pink h-full mt-4 flex flex-row items-center pb-[54px] ">About</div>
                    </Link>
                    <Link to="trackSection"
                        smooth={'easeInOutQuint'}
                        duration={200}
                        offset={-10}
                        className="font-stacker text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-blue h-full transition duration-500">
                        <div className="text-purp2 h-full mt-4 flex flex-row items-center pb-[54px]">Tracks</div>
                    </Link>
                    <Link to="schedule"
                        smooth={'easeInOutQuint'}
                        duration={200}
                        offset={0}
                        className="font-stacker text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-blue h-full transition duration-500">
                        <div className="text-cyan h-full mt-4 flex flex-row items-center pb-[54px]">Schedule</div>
                    </Link>
                    <Link to="faqSection"
                        smooth={'easeInOutQuint'}
                        duration={200}
                        offset={-10}
                        className="font-stacker text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-blue h-full transition duration-500">
                        <div className="text-pink h-full mt-4 flex flex-row items-center pb-[54px]">FAQ</div>
                    </Link>
                    <NavLink to="/uwb-hacks23/Contact" className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-blue h-full transition duration-500">
                        <div className="font-stacker text-purp2 h-full mt-4 flex flex-row items-center pb-[54px]">Contact</div>
                    </NavLink>
                    <NavLink to="https://uwb-hacks-ai.devpost.com/"
                        className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-blue h-full transition duration-500"
                        target="_blank">
                        <div className="font-stacker text-pink h-full mt-4 flex flex-row items-center pb-[54px]">
                            Devpost
                            <svg className="h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                                    fill="#eb37c5"
                                />
                            </svg>
                        </div>
                    </NavLink>
                    <NavLink
                        to="https://discord.gg/GnSTYYcUEa"
                        className="text-1xl px-4 font-semibold leading-6 cursor-pointer items-center bg-opacity-10 hover:bg-blue h-full transition duration-500"
                        target="_blank"
                        onMouseEnter={handleHeaderButtonMouseEnter}
                        onMouseLeave={handleHeaderButtonMouseLeave}
                    >
                        <div className="font-stacker text-cyan h-full mt-4 flex flex-row items-center pb-[54px]">
                            {/* {isHeaderButtonHovered && <img src={pawLogo} alt="Paw Logo" className="icon-on-hover" />} */}
                            Discord{ }
                            <svg className="h-3 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path
                                    d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"
                                    fill="cyan"
                                />
                            </svg>
                        </div>
                    </NavLink>

                </Popover.Group>
            </nav>

            <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 " />
                <Dialog.Panel className="fixed inset-y-0 right-0 z-20 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="mt-4 text-purple text-2xl font-bold ">UWB Hacks 2024</span>
                            {/*<img*/}
                            {/*    className="h-8 w-auto"*/}
                            {/*    src=""*/}
                            {/*    alt="Uwb Hacks 23"*/}
                            {/*/>*/}
                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5  hover:bg-light-purple"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6  rounded" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="aboutSection"
                                    smooth={'easeInOutQuint'}
                                    duration={200}
                                    offset={0}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    About
                                </Link>
                                <Link
                                    to="trackSection"
                                    smooth={'easeInOutQuint'}
                                    duration={200}
                                    offset={-10}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    Tracks
                                </Link>
                                <Link
                                    to="schedule"
                                    smooth={'easeInOutQuint'}
                                    duration={200}
                                    offset={0}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    Schedule
                                </Link>
                                <Link
                                    to="faqSection"
                                    smooth={'easeInOutQuint'}
                                    duration={200}
                                    offset={-10}
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow cursor-pointer"
                                    onClick={handleCloseMenu}
                                >
                                    FAQ
                                </Link>
                                <NavLink
                                    to="/uwb-hacks23/Contact"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow"
                                    onClick={handleCloseMenu}
                                >
                                    Contact
                                </NavLink>
                                <NavLink
                                    to="https://uwb-hacks-ai.devpost.com/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow"
                                    onClick={handleCloseMenu}
                                    target="_blank"
                                >
                                    Devpost
                                </NavLink>
                                <NavLink
                                    to="https://discord.gg/GnSTYYcUEa"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:text-yellow"
                                    onClick={handleCloseMenu}
                                    target="_blank"
                                >
                                    Discord
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </Dialog.Panel>
            </Dialog>
        </header>
    )
}
