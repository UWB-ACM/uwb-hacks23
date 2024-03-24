import './Home.css';
import { useEffect } from "react";

function Schedule() {
    const handleIntersection = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

    useEffect(() => {
        const elements = document.querySelectorAll(".schedule");
        elements.forEach((element) => observer.observe(element));
    }, [observer]);

    return (
        <div id="schedule" className="h-auto bg-opacity-90 shadow-lg mb-44 bg-light-purple text-center" style={{ backgroundColor: '#6f07d6', overflow: 'hidden', margin: '0', padding: '0' }}>
            <div className={"font-Stacker text-6xl  pt-4"} style={{ color: '#18e4ec' }}>Schedule</div>
            <div className="flex flex-wrap h-auto pb-4">

                <div id={"schedule-1"} className="bg-black bg-opacity-90 w-96 h-100 my-3 mx-auto text-center font-semibold border-2 border-pink rounded-2xl container schedule">
                    <div className={"text-4xl mt-2 text-pink font-stacker"}>Friday</div>
                    <div className="h-12 mt-4 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>10:00 AM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>
                            TBA
                        </div>
                    </div>
                    <hr className={"border-t border-pink"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>12:00 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>2:00 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>5:00 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>6:30 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                </div>
                <div id={"schedule-2"} className="bg-black w-96 h-100 my-3 mx-auto text-center font-semibold border-2 border-pink rounded-2xl container schedule delay-1">
                    <div className={"text-4xl mt-2 text-pink font-stacker"}>Saturday</div>
                    <div className="rounded-xl h-12 mt-4 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>10:00 AM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>12:00 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>1:00 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>3:00 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>5:30 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                </div>
                <div id={"schedule-3"} className="bg-black w-96 h-100 my-3 mx-auto text-center font-semibold border-2 border-pink rounded-2xl container schedule delay-2">
                    <div className={"text-4xl mt-2 text-pink font-stacker"}>Sunday</div>
                    <div className="rounded-xl h-12 mt-4 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>10:00 AM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>11:30 AM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                    <div className="rounded-xl h-12 mt-3 mb-1 flex items-center">
                        <div className={"ml-5 border-1 border-pink rounded-md py-1 px-2 text-sm font-light bg-black"}>
                            <p style={{ color: '#CFD30C' }}>12:00 PM</p>
                        </div>
                        <div className={"ml-5 "} style={{ color: '#CFD30C' }}>TBA</div>
                    </div>
                    <hr className={"border-t border-gray-400"} />
                </div>
            </div>
        </div>
    );
}

export default Schedule;