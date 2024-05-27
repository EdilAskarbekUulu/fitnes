import React from "react";
import image from "./img/Image.png"
import image2 from "./img/Image2.png"
import image3 from "./img/Image3.png"
import image4 from "./img/Image4.png"
import './sectionSeven.css'

export default function SectionSeven(){
    return(
        <>
        <div className="sectionSevenMain">
            <div className="sectionSevenWrap">
                <div className="sectionSevenImg">
                    <img src={image} alt="" />
                </div>
                <div className="sectionSevenText">
                    <h3>Eco Friendly</h3>
                    <h2>Econis is a Friendly Organic Store</h2>
                    <div className="sectionSevenBlock">
                        <div className="sectionSevenBox">
                            <h2>Start with Our Company First</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error 
                                sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="sectionSevenBox">
                            <h2>Learn How to Grow Yourself</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit 
                                voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                        <div className="sectionSevenBox">
                            <h2>Farming Strategies of Today</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit 
                                voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sectionSevenImage">
                <div className="sectoinSevenImageImg">
                    <img src={image2} alt="" />
                    <button>Organic Juice</button>
                </div>
                <div className="sectoinSevenImageImg">
                    <img src={image3} alt="" />
                    <button>Organic Food</button>
                </div>
                <div className="sectoinSevenImageImg">
                    <img src={image4} alt="" />
                    <button>Nuts Cookis</button>
                </div>
            </div>
        </div>
        </>
    )
}