import React from "react";
// import img from "../assest/cakes/Ist.jpg";
import "../styles/card.css";
import Arr from './details';

const Card=(props)=>{
    return(
        <>
        <div className="card">
            <div className="image">
                <img src={props.imgSrc} alt="img"/>
            </div>
            <div className="info">
                <div className="title">{props.title}</div>
                <div className="price">{props.price}</div>
            </div>
        </div>
        </>
    )
}

export default Card;