

function About() {
    return(
        <div>        
            <div className="w-full bg-light-purple bg-opacity-90 shadow-lg mb-40" id="aboutSection">
                <div className="flex flex-col lg:flex-row items-center justify-center py-32">
                    <div className="w-72 min-[500px]:w-[30rem] min-[400px]:w-[24rem]">
                        <div className="font-SecularOne text-white text-center text-4xl  min-[400px]:text-5xl min-[500px]:text-6xl overflow-hidden"> UWB Hacks 2024 is In Person! </div>
                    </div>
                    <div className="w-20 h-20"></div>
                    <div className="w-72 min-[500px]:w-[30rem] min-[400px]:w-[24rem]"> 
                        <div className="font-normal text-xl text-black ">UWB Hacks In Person is the 7th annual hackathon at the University of Washington, Bothell. The UWB ACM intends to bring students with diverse skill sets together to make connections and create something useful and/or fun. <br/><br/>  Our hackathon is a great way for college students to network, get hands-on experience in programming, and solve problems in teams. Whether this is your first or five-hundredth hackathon, come join UWB Hacks In Person this year for a fun time!</div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default About;