import React from "react";
import Cookies from './CookiesList';
import Table from "./Table1";

const CookiesHead=()=>{
return(
    <>
    <div class="table">
    <div className="menuhead" id="Cookie">
                <p>Cookies</p><hr/>
            </div>
            {Cookies.map((val) => {
          return (<Table
            key={val.id} item={val.item}
            price={val.price}></Table>
          )
        })}
      </div>
    </>
)
}


export default CookiesHead;