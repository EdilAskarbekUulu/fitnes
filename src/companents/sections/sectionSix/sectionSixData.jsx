import React from "react";


export default function SectionSixData({produckt}){
    return(
        <>
        <div className="sectionSixBlock" key={produckt.id}>
            <div className="sectionSixImg">
                <img src={produckt.photo} alt="" />
                <span>{produckt.category}</span>
            </div>
            <div className="sectionSixCardText">
                <h2>{produckt.name}</h2>
                <div className="sectionSixSum">
                    <div className="sectionSixSumma">
                        <p>${produckt.discount}.00</p>
                        <h4>${produckt.summa}.00</h4>
                    </div>
                    <div className="sectionSixStar">
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