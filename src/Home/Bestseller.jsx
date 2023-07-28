import React from "react";
import Arr from "./Bestsellerdetails";
import Card from "../Component/Card";
import "../styles/home.css";


// common component for the 1 customize column

const Birthday=()=>{
    // const arr=props.Arr;
    return(
        <>
          <div className="part">
            <div className="title">
              <h3>Our Bestsellers</h3>
            </div>

            <div className="cards">
            {Arr.map((val) => {
          return (<Card
            key={val.id} title={val.title}
            imgSrc={val.imgSrc}></Card>
          )
        })} 
            </div>
          </div>

      
        </>
    )
}

export default Birthday;