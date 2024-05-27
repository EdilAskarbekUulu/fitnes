import React from "react";
import photo001 from "../img/Icon.png"
import photo002 from "../img/Icon2.png"
import photo003 from "../img/Photo.png"
import vector from "../img/Vector.png"
import "./sectionThree.css"

export default function SectionThree(){
    return(
        <>
        <div className="sectionThreeMain">
            <div className="sectionThreeWrap">
                <div className="sectionThreeImg">
                    <img src={photo003} alt="" />
                </div>
                <div className="sectionThreeText">
                    <h3>About Us</h3>
                    <h2>We Believe in Working Accredited Farmers</h2>
                    <p>Simply dummy text of the printing and typesetting industry. 
                        Lorem had ceased to been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley.</p>
                    <div className="sectionThreeBox">
                        <div className="sectionThreeBoxImg">
                            <img src={photo001} alt="" />
                        </div>
                        <div className="sectionThreeBoxText">
                            <h2>Organic Foods Only</h2>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                    <div className="sectionThreeBox">
                        <div className="sectionThreeBoxImg">
                            <img src={photo002} alt="" />
                        </div>
                        <div className="sectionThreeBoxText">
                            <h2>Quality Standards</h2>
                            <p>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
                        </div>
                    </div>
                    <button className="btn">Shop Now <div className="btnImg"><img src={vector} alt="" /></div></button>
                </div>
            </div>
        </div>
        </>
    )
}