import React from "react";
import "../styles/table.css";
const Table=(props)=>{
    return(
        <>
        <div className="menu" id="cakes">
            <div className="row">
                <span className="col1">{props.item}</span>
                <span className="col2">{props.price}</span>
            </div>
        </div>
        </>
    )
}

export default Table;