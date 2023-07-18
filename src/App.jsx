import React from 'react';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';
import Card from './Component/Card';
import Arr from './Component/details';

function App(props) {
  return (
   <>
   <div className='main'>
   <Header/>
   <Nav/>
   </div>
    <div className='cards'>
      {Arr.map((val)=>{
        return (<Card
          key={val.id} title={val.title}
          imgSrc={val.imgSrc} price={val.price}></Card>
          )
      })}
    </div>
   </>
  );
}

export default App;
