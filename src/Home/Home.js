import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import Tracks from "./Tracks";
import options from "./particleConfig"; // configuration of particles
import FAQ from "./FAQ";
import './Home.css';
import ScrollToTopButton from "./ScrollToTopButton"
import HeaderSection from "./HeaderSection";

function Home() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, [])
    return (
        <>
            <HeaderSection />
            <div className="w-full Home">
                <Tracks />
                <FAQ />
                <Particles className="particles" options={options} init={particlesInit} />
                <ScrollToTopButton/>
            </div>
        </>
    );
}

export default Home;
