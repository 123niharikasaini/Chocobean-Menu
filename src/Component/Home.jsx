import React from "react";
import Arr from "./Details";
import Card from "./Card";
import "../styles/home.css";
import Common from "../Home/Common"
import Birthday from "../Home/Birthday";
import Bestseller from "../Home/Bestseller";


const Home=()=>{
    return(
        <>
        <Bestseller/>
          <Birthday/>
        <Common/>
        
        </>
    )
}

export default Home;