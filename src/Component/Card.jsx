import React from "react";
import "../styles/card.css";

const Card=(props)=>{
    return(
        <>
        <div className="card">
            <div className="image">
                <img src={props.imgSrc} alt="..."/>
            </div>
            {/* <div className="info"> */}
            <div className="title">{props.title}</div>
                {/* <div className="price">{props.price}</div> */}
            {/* </div> */}
        </div>
        </>
    )
}

export default Card;