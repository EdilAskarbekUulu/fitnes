import React from "react";
import photo01 from '../img/photo01.png'
import photo02 from '../img/Photo.jpg'
import './sectionTwo.css'

export default function SectionTwo(){
    return(
        <>
        <div className="sectionTwoMain">
            <div className="sectionTwoWrap">
                <div className="sectionTwoBlock">
                    <div className="sectionTwoBlockImg">
                        <img src={photo02} alt="" />
                    </div>
                    <div className="sectionTwoBlockText">
                        <h3>Natural!!</h3>
                        <h2>Get Garden Fresh Fruits</h2>
                    </div>
                </div>
                <div className="sectionTwoBlock">
                <div className="sectionTwoBlockImg">
                        <img src={photo01} alt="" />
                    </div>
                    <div className="sectionTwoBlockText">
                        <h3 style={{color:'#7EB693'}}>Offer!!</h3>
                        <h2 style={{color: '#274C5B'}}>Get 10% off on Vegetables</h2>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}