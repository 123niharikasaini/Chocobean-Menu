import React,{useState} from "react";
import "./nav.css";
// import img from "../assest/Chocobean-logo-removebg-preview.png";


const Nav=()=>{
    const [navClass,addClass]=useState("Navlist");

    // to change burger class
    const [burger_class,setBurgerClass]=useState("burger-bar unclicked");
    const [menu_class,setMenuClass]=useState("menu hidden");
    const [isMenuClicked,setIsMenuClicked]=useState(false);
    
    
 
    // toggle burger menu change
    const updateMenu=()=>{
        console.log("clicked");
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked");
            setMenuClass("menu visible"); 
            addClass("Navlist active");
        }
        else{
            setBurgerClass("burger-bar unclicked");
            setMenuClass("menu hidden");
            addClass("Navlist");
        }
        
        setIsMenuClicked(!isMenuClicked);
    
    }

    return(
        <>
        <div className="nav">
            <ul className={navClass}>
                <li>Cakes</li>
                <li>Tea time Cakes</li>
                <li>Cupcakes</li>
                <li>Brownie</li>
                <li>Cookies</li>
                {/* <li>BentoCakes</li> */}
            </ul>

            <div className="burger-menu" onClick ={updateMenu}>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
                <span className={burger_class}></span>
            </div>
            

        </div>
        
        </>
    );
}

export default Nav;
