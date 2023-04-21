

function About() {
    return(
        <div>        
            <div className="w-full bg-light-purple bg-opacity-90 shadow-lg mb-40" id="aboutSection">
                <div className="flex flex-col lg:flex-row items-center justify-center py-32">
                    <div className="w-72 min-[500px]:w-[30rem]">
                        <div className="font-SecularOne text-black text-4xl text-center  relative min-[500px]:text-6xl"> UWB Hacks 2023 is In Person! </div>
                    </div>
                    <div className="w-20 h-20 relative"></div>
                    <div className="w-60 sm:w-[40rem]"> 
                        <div className="font-normal text-xl text-black  relative">UWB Hacks In Person is the 6th annual hackathon at the University of Washington, Bothell. The UWB ACM intends to bring students with diverse skill sets together to make connections and create something useful and/or fun. <br/><br/>  Our hackathon is a great way for college students to network, get hands-on experience in programming, and solve problems in teams. Whether this is your first or five-hundredth hackathon, come join UWB Hacks In Person this year for a fun time!</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About;