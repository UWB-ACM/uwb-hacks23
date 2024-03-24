import React from 'react';
import './Home.css';
import EarthHacks from './earthhacks.png'
import SponsorCard from './SponsorCard';

function Sponsors() {
    return (
        <>
            <div className="rounded-xl overflow-hidden my-5" id="sponsorSection">
                <div className="font-SecularOne text-6xl text-center mt-3 mb-2">
                    Sponsors
                </div>
                
                <div className="flex flex-col items-center justify-center sm:flex-row sm:flex-wrap overflow-hidden">
                    <SponsorCard backgroundImage={EarthHacks}> As we start to move away from quarantine, how can we ensure people are being environmentally conscious when engaging in outdoor activities? Look into ways sustainability can be maintained now that gatherings and events are moving in-person. </SponsorCard>
                </div>
            </div>
        </>
    );
}

export default Sponsors;