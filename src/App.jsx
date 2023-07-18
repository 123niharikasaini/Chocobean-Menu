import React from 'react';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Card from './Component/Card';
import Arr from './Component/details';
import Cakes from './Component/CakeList';
import Table from './Component/Table1';
import TableHead from './Component/TableHead';
import CupCakesHead from './Component/CupCakesHead';
import CupCake from './Component/CupCakesList';
import BrownieHead from './Component/BrownieHead';
import Brownie from './Component/BrownieList';
import CookiesHead from './Component/CookiesHead';
import Cookies from './Component/CookiesList';
import Customize from './Component/Customize';
import Footer from "./Component/Footer";

function App(props) {
  return (
    <>
      <div className='main'>
        <Header />
        <Nav />
      </div>

      <div class="table">
        <TableHead />
        {Cakes.map((val) => {
          return (<Table
            key={val.id} item={val.item}
            price={val.price}></Table>
          )
        })}
      </div>

      <div class="table">
        <CupCakesHead/>
        {CupCake.map((val) => {
          return (<Table
            key={val.id} item={val.item}
            price={val.price}></Table>
          )
        })}
      </div>

      <div class="table">
        <BrownieHead/>
        {Brownie.map((val) => {
          return (<Table
            key={val.id} item={val.item}
            price={val.price}></Table>
          )
        })}
      </div>

      <div class="table">
        <CookiesHead/>
        {Cookies.map((val) => {
          return (<Table
            key={val.id} item={val.item}
            price={val.price}></Table>
          )
        })}
      </div>
      <hr/>

      <Customize/>
      <div className='cards'>
        {Arr.map((val) => {
          return (<Card
            key={val.id} title={val.title}
            imgSrc={val.imgSrc} price={val.price}></Card>
          )
        })}
      </div>

      <Footer/>
    </>
  );
}

export default App;
