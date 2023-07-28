import React from "react";
import Arr from "./Bday";
import Card from "../Component/Card";
import "../styles/home.css";


// common component for the 1 customize column

const Birthday=()=>{
    // const arr=props.Arr;
    return(
        <>
          <div className="part">
            <div className="title">
              <h3>Customization Cakes</h3>
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