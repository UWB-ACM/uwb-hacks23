import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {NavLink, useLocation} from "react-router-dom";
//import {Link} from "react-scroll";
export default function Footer() {
    const location = useLocation();
    if (location.pathname !== "/uwb-hacks23" && location.pathname !== "/uwb-hacks23/") {
        return <></>
    }

    return (
        <footer 
        className = 'bg-gradient-to-r from-light-purple via-purple to-light-purple'
        style={{
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingBottom: '50px'
        }}>
            {/*<div style={{
                marginRight: '5%',
                color: 'white',
                textAlign: 'left',
                fontSize: '18px'
            }}>
                <div style={{fontsize:'22px'}}></div>
                <Link to="aboutSection"
                    smooth={'easeInOutQuint'}
                    duration={200}>
                    <div>About</div>            
                </Link>
                <Link to="trackSection"
                    smooth={'easeInOutQuint'}
                    duration={200}>
                    <div>Tracks</div>            
                </Link>
                <Link to="schedule"
                    smooth={'easeInOutQuint'}
                    duration={200}>
                    <div>Schedule</div>
                </Link>
                <Link to="faqSection"
                    smooth={'easeInOutQuint'}
                    duration={200}>
                    <div>FAQ</div>            
                </Link>
            </div>*/}
            <div style={{margin: '55px 9% 0 9%',}}>
                <div 
                className='font-SecularOne'
                style={{
                    color: 'white',
                    fontSize: '24px',
                    marginBottom: '19px',
                    opacity: 1,
                    textAlign: 'center',
                    whiteSpace: 'nowrap'
                }}>
                    Connect with us!
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '20px'
                }}>
                    <NavLink to={"https://discord.gg/7jFyNVCcpH"} className="mx-auto">
                        <FontAwesomeIcon icon={faDiscord} style={{color: "white", transform: "scale(2)"}} />
                    </NavLink>
                    <NavLink to={"https://www.instagram.com/uwb_acm/"} className="mx-auto">
                        <FontAwesomeIcon icon={faInstagram} style={{color: "white", transform: "scale(2)"}} />
                    </NavLink>
                    <NavLink to={"https://www.facebook.com/uwbacm/"} className="mx-auto">
                        <FontAwesomeIcon icon={faFacebook} style={{color: "white", transform: "scale(2)"}} />
                    </NavLink>
                    <NavLink to={"https://www.linkedin.com/company/uwb-acm-club/"} className="mx-auto">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: "white", transform: "scale(2)"}} />
                    </NavLink>
                </div>
            </div>
            {/* The contact column is a placeholder column for now 
            <div style={{margin: '55px 9% 0 9%', color: 'white'}}>
                <NavLink to="/uwb-hacks23/Contact" className='hover:text-white'>
                    <div className='font-SecularOne' style={{fontSize: '24px'}}>Contact Us</div>  
                    <textarea
                        style={{
                            marginTop: '13px',
                            borderRadius: '0.375rem',
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                            border: '2px solid grey',
                            fontSize: '1.5rem',
                            width: '100%',
                            height: '50px' 
                        }}
                    />
                </NavLink> 
            </div>*/}

            <style>
                {`
                @media (max-width: 700px) {
                    footer {
                        flex-direction: column;
                        align-items: center;
                    }
                }
                `}
            </style>
        </footer>
      );
}