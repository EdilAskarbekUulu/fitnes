import React from "react";
import { produckt } from "../../../data/data";
import SectionSixData from "./sectionSixData";
import vector from "../img/Vector.png"
import './sectionSix.css'


export default function SectionSix(){
    return(
        <>
        <div className="sectionSixMain">
            <div className="sectionSixWrap">
                <div className="sectionSixText">
                    <h3>Offer</h3>
                    <h2>We Offer Organic For You</h2>
                </div>
                <button>View All Product<div className="btnImg"><img src={vector} alt="" /></div></button>
            </div>
            <div className="sectionSixBox">
                <SectionSixData produckt={produckt[12]} />
                <SectionSixData produckt={produckt[13]} />
                <SectionSixData produckt={produckt[14]} />
                <SectionSixData produckt={produckt[15]} />
            </div>
        </div>
        </>
    )
}