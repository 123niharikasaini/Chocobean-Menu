import React from 'react';
import './App.css';
import Header from './Component/Header';
import Nav from './Component/Nav';

const theme={
  media:{
    mobile:"768px",
    tab:"998px",
  }
}

function App() {
  return (
   <>
   <div className='main'>
   <Header/>
   <Nav/></div>
   </>
  );
}

export default App;
