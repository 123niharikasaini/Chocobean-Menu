import React from "react";
import CupCake from './CupCakesList';
import Table from "./Table1";
const CupCakesHead=()=>{
return(
    <>
        <div class="table">
            <div className="menuhead" id="cupCakes">
                <p>CupCakes</p><hr/>
            </div>
            {CupCake.map((val) => {
          return (<Table
            key={val.id} item={val.item}
            price={val.price}></Table>
          )
        })}
      </div>
        
    </>
)
}


export default CupCakesHead;