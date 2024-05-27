import React from "react";
import './sectionFive.css'
import left from "./img/left.png"
import right from "./img/right.png"
import photo from "./img/photo1.jpg"
import star from "../../../data/img/Star.png"

export default function SectionFive(){
    return(
        <>
        <div className="sectionFiveMain">
            <div className="sectionFiveWrap">
                <div className="sectionFiveBlock">
                    <img src={right} alt="" />
                </div>
                <div className="sectionFiveBlockTwo">
                    <div className="sectionFiveText">
                        <h3>Testimonial</h3>
                        <h2>What Our Customer Saying?</h2>
                        <div className="sectionFiveImg">
                            <div className="sectionFivePhoto">
                                <img src={photo} alt="" />
                            </div>
                            <div className="sectionFiveStar">
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                                <img src={star} alt="" />
                            </div>
                        </div>
                        <p>Simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum simply dummy text of the printing and typesetting 
                            industry. Lorem Ipsum has been.</p>
                        <h4>Sara Taylor</h4>
                        <h5>Consumer</h5>
                        <div className="sectionFiveProsend">
                            <div className="sectionFiveBox">
                                <h1>100%</h1>
                                <p>Organic</p>
                            </div>
                            <div className="sectionFiveBox">
                                <h1>285</h1>
                                <p>Active Product</p>
                            </div>
                            <div className="sectionFiveBox">
                                <h1>350+</h1>
                                <p>Organic Orchads</p>
                            </div>
                            <div className="sectionFiveBox">
                                <h1>25+</h1>
                                <p>Years of Farming</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sectionFiveBlockThree">
                    <img src={left} alt="" />
                </div>
            </div>
        </div>
        </>
    )
}