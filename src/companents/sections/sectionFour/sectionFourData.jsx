import React from "react";



export default function SectionFourData({produckt}){
    return(
        <>
        <div className="sectionFourBlock" key={produckt.id}>
            <div className="sectionFourImg">
                <img src={produckt.photo} alt="" />
                <span>{produckt.category}</span>
            </div>
            <div className="sectionFourCardText">
                <h2>{produckt.name}</h2>
                <div className="sectionFourSum">
                    <div className="sectionFourSumma">
                        <p>${produckt.discount}.00</p>
                        <h4>${produckt.summa}.00</h4>
                    </div>
                    <div className="sectionFourStar">
                        {produckt.star.map((starImg, index) => (
                            <img key={index} src={starImg} alt="Star" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}