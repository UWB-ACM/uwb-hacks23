import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faLinkedin, faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import {NavLink, useLocation} from "react-router-dom";
//import {Link} from "react-scroll";
export default function Footer() {
    const location = useLocation();
    if (location.pathname !== "/uwb-hacks24" && location.pathname !== "/uwb-hacks24/") {
        return <></>
    }

    return (
        <footer 
        className = 'bg-gradient-to-r from-purple via-deep-purple to-purple'
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
                    <div>Schedule</div>\begin{pmatrix}5\\ 1\\ 4\end{pmatrix}
                </Link>
                <Link to="faqSection"
                    smooth={'easeInOutQuint'}
                    duration={200}>
                    <div>FAQ</div>            
                </Link>
            </div>*/}
            <div style={{margin: '30px 9% 5px 9%',}}>
                <div 
                className="font-stacker font-semibold"
                style={{
                    color: 'white',
                    fontSize: '24px',
                    marginBottom: '30px',
                    opacity: 1,
                    textAlign: 'center'
                }}>
                    <div className="text-pink h-full mt-4">
                        Follow us for future events
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    maxWidth: '400px',
                    margin: '0 auto'
                }}>
                    <NavLink to={"https://discord.gg/yPjkrbNFqK"} className="mx-auto social-icon">
                        <FontAwesomeIcon icon={faDiscord} style={{color: "#4ddbff", transform: "scale(2.3)"}} />
                    </NavLink>
                    <NavLink to={"https://www.instagram.com/uwb_acm/"} className="mx-auto social-icon">
                        <FontAwesomeIcon icon={faInstagram} style={{color: "#ff33cc", transform: "scale(2.3)"}} />
                    </NavLink>
                    <NavLink to={"https://www.facebook.com/uwbacm/"} className="mx-auto social-icon">
                        <FontAwesomeIcon icon={faFacebook} style={{color: "#4d94ff", transform: "scale(2.3)"}} />
                    </NavLink>
                    <NavLink to={"https://www.linkedin.com/company/uwb-acm-club/"} className="mx-auto social-icon">
                        <FontAwesomeIcon icon={faLinkedin} style={{color: "#4db8ff", transform: "scale(2.3)"}} />
                    </NavLink>
                </div>
            </div>
            {/* The contact column is a placeholder column for now 
            <div style={{margin: '55px 9% 0 9%', color: 'white'}}>
                <NavLink to="/uwb-hacks24/Contact" className='hover:text-white'>
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

                .social-icon:hover {
                    transform: scale(1.5);
                }
                `}
            </style>
        </footer>
      );
}