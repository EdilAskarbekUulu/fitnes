import React from "react";
import image from '../img/Image.png'
import vector from '../img/Vector.png'
import './sectionOne.css'

export default function SectionOne(){
    return(
        <>
        <div className="sectionOneMain">
            <div className="SectionOneImg">
                <img src={image} alt="" />
            </div>
            <div className="sectionOneText">
                <h2>100% Natural Food</h2>
                <h1>Choose the best healthier way
                 of life</h1>
                <button>Explore Now  <div className="btnImg"><img src={vector} alt=""/> </div> </button>
            </div>
        </div>
        </>
    )
}