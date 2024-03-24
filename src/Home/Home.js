import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Tracks from "./Tracks";
import options from "./particleConfig"; // configuration of particles
import FAQ from "./FAQ";
import './Home.css';
import ScrollToTopButton from "./ScrollToTopButton"
import Hero from "./Hero";
import About from "./About";
import Schedule from "./Schedule";
import Sponsors from "./Sponsors";

function Home() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, [])
    return (
        <>
            <Hero />
            <div className="w-full Home">
                <About/>
                <Sponsors/>
                <Tracks />
                <Schedule />
                <FAQ />
                <Particles className="particles" options={options} init={particlesInit} />
                <ScrollToTopButton/>
            </div>

        </>
    );
}

export default Home;
