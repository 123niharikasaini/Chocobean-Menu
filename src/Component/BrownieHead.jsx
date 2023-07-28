import React from "react";
import Brownie from './BrownieList';
import Table from "./Table1";
const BrownieHead=()=>{
return(
    <>
        <div class="table">
        <div className="menuhead" id="Brownie">
            <p>Brownies</p><hr/>
        </div>
        {Brownie.map((val) => {
          return (<Table
            key={val.id} item={val.item}
            price={val.price}></Table>
          )
        })}
      </div>
    </>
)
}


export default BrownieHead;