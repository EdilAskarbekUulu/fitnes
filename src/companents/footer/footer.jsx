import React from "react";
import bac from './img/bac.png'
import './footer.css'
import logo from './img/Logo.png'
import face from "./img/face.png"
import pa from "./img/pa.png"
import twi from "./img/twi.png"
import insta from "./img/Insta.png"


export default function  Footer(){
    return(
        <>
        <div className="footer">
            <div className="footerImg">
                <img src={bac} alt="" />
            </div>
            <div className="footerWrap">
                <div className="footerText">
                    <h1>Subscribe to our Newsletter</h1>
                </div>
                <div className="footerText">
                    <input type="text" placeholder="Your Email Address" />
                    <button>Subscribe</button>
                </div>
            </div>
            <div className="footerBlock">
                <div className="FooterBoxOne">
                    <h2>Contact Us</h2>
                    <div className="FooterContackt">
                        <h3>Email</h3>
                        <p>needhelp@Organia.com</p>
                    </div>
                    <div className="FooterContackt">
                        <h3>Phone</h3>
                        <p>666 888 888</p>
                    </div>
                    <div className="FooterContackt">
                        <h3>Address</h3>
                        <p>88 road, borklyn street, USA</p>
                    </div>
                </div>
                <div className="FooterBoxTwo">
                    <div className="footerLogo">
                        <img src={logo} alt="" />
                    </div>
                    <p>Simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum simply dummy text of the printing</p>
                    <div className="account">
                        <div className="footerAccountImg"><img src={insta} alt="" /></div>
                        <div className="footerAccountImg"><img src={face} alt="" /></div>
                        <div className="footerAccountImg"><img src={twi} alt="" /></div>
                        <div className="footerAccountImg"><img src={pa} alt="" /></div>
                    </div>
                </div>
                <div className="FooterBoxThree">
                    <div className="UtilityPages">
                        <h2>Utility Pages</h2>
                        <h3>Style Guide    </h3>
                        <h3>404 Not Found</h3>
                        <h3>Password Protected</h3>
                        <h3>Licences</h3>
                        <h3>Changelog</h3>
                    </div>
                </div>
            </div>
            <div className="footerEnd">
                <h4>Copyright © <span>Organick</span> </h4>
            </div>
        </div>
        </>
    )
}