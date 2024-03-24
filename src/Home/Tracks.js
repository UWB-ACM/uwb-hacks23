import React from 'react';
import './Home.css';
import Social from "./media/socialGood.png"
import BioTech from "./media/biotech.png"
import Business from "./media/business.png"
import StackedCards from './TrackCard';

// function Tracks() {
//     return (
//         <>
//             <div className="bg-purple rounded-xl overflow-hidden" id="trackSection">
//                 <div className="font-stacker text-pink text-6xl text-center mt-3 mb-2">
//                     Tracks
//                 </div>

//                 <div className="font-stacker text-pink flex flex-col items-center justify-center sm:flex-row sm:flex-wrap overflow-hidden pb-36">
//                     <StackedCards cardTitle="BioTech" backgroundImage={BioTech}>As technology and healthcare continue to advance, explore how <b className="text-cyan">null</b> can play a pivotal role in enhancing the medical field</StackedCards>


//                     <StackedCards cardTitle="Business" backgroundImage={Business}>As companies integrate AI into their workforce, let's explore potential strategies to streamline processes and enhance overall <b className="text-cyan">null</b> efficiency</StackedCards>


//                     <StackedCards cardTitle="Social Good" backgroundImage={Social}>Delve into strategies to utilize AI for community initiatives, champion inclusivity, and catalyze profound, positive change in the pursuit of <b className="text-cyan">null</b></StackedCards>

//                 </div>
//             </div>
//         </>
//     );
// }



function Tracks() {
    return (
        <>
            <div className="bg-purple overflow-hidden" id="trackSection">
                <div className="font-stacker text-pink text-6xl text-center mt-3 mb-2">
                    Tracks
                </div>

                <div className="font-stacker text-pink flex flex-col items-center justify-center sm:flex-row sm:flex-wrap overflow-hidden pb-36">
                    <StackedCards cardTitle="Soon..." backgroundImage={BioTech}>Tracks to be released soon. Stay tuned.</StackedCards>
                </div>
            </div>
        </>
    );
}


export default Tracks;