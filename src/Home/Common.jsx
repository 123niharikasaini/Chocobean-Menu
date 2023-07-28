import React from "react";
import Arr from "../Component/Details";
import Card from "../Component/Card";
import "../styles/home.css";


// common component for the 1 customize column

const Common=()=>{
    // const arr=props.Arr;
    return(
        <>
          <div className="part">
            <div className="title">
              <h3>Valentine Cakes</h3>
            </div>

            <div className="cards">
            {Arr.map((val) => {
          return (<Card
            key={val.id} title={val.title}
            imgSrc={val.imgSrc} ></Card>
          )
        })} 
            </div>
          </div>

      
        </>
    )
}

export default Common;