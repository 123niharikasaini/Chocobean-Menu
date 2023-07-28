import React from 'react';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Card from './Component/Card';
// import Arr from './Component/details';
import Home from './Component/Home';
// import Table from './Component/Table1';
import TableHead from './Component/TableHead';
import CupCakesHead from './Component/CupCakesHead';
// import CupCake from './Component/CupCakesList';
import BrownieHead from './Component/BrownieHead';
// import Brownie from './Component/BrownieList';
import CookiesHead from './Component/CookiesHead';
// import Cookies from './Component/CookiesList';
// import Customize from './Component/Customize';
import Footer from "./Component/Footer";
import { Routes, Route } from 'react-router-dom';
import Error from './Component/Error';

function App() {
  return (
    <>
    <div className="container">
      <div className='main'>
        <Header />
        {/* <Nav /> */}
      </div>

      <Routes>
        <Route exact path="/Chocobean-Menu" Component={Home}/>
        <Route exact path="/cakes" Component={TableHead}/>
        <Route exact path="/cupcakes" Component={CupCakesHead}/>
        <Route exact path="/brownie" Component={BrownieHead}/>
        <Route exact path="/cookies" Component={CookiesHead}/>
        <Route path='*' Component={Error}/>
      </Routes>
      <Footer/>
      </div>
    </>
  );
}

export default App;
