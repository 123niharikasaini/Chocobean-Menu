import React from "react";
import Cakes from './CakeList';
import Table from "./Table1";
// import "../styles/"
const TableHead=()=>{
return(
    <>
    <div class="table">
        <div className="menuhead">
                <p>Cakes</p><hr/>
            </div>
            <div className="menu" id="cakes">
            <div className="row">
                <span ></span>
                <span id="priceHead">500g/kg</span>
            </div>
        </div>
        {Cakes.map((val) => {
          return (<Table
            key={val.id} item={val.item}
            price={val.price}></Table>
          );
        })}
    </div>
    </>
)
}


export default TableHead;