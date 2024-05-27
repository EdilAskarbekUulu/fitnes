import React from "react";
import { produckt } from "../../../data/data";
import './sectionFour.css'
import SectionFourData from "./sectionFourData";
import vector from "../img/Vector.png"


export default function SectionFour(){
    return(
        <>
        <div className="sectionFourMain">
            <div className="sectionFourText">
                <h3>Categories</h3>
                <h2>Our Products</h2>
            </div>
            <div className="sectionFourWrap">
                <SectionFourData produckt={produckt[0]} />
                <SectionFourData produckt={produckt[1]} />
                <SectionFourData produckt={produckt[2]} />
                <SectionFourData produckt={produckt[3]} />
                <SectionFourData produckt={produckt[4]} />
                <SectionFourData produckt={produckt[5]} />
                <SectionFourData produckt={produckt[6]} />
                <SectionFourData produckt={produckt[7]} /> 
            </div>
            <div className="sectoinFourBtn">
                <button className="btn">Load More <div className="btnImg"><img src={vector} alt="" /></div></button>
            </div>
        </div>
        </>
    )
}