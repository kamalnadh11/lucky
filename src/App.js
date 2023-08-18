import {Route, Routes } from 'react-router-dom';
import React from 'react';
import './App.css'
import Home from './home';
import Photos1 from './photos1';
import Photos2 from './photos2';
import Photos3 from './photos3';
import Photos4 from './photos4';
import Photos5 from './photos5';
import Photos6 from './photos6';
import Photos7 from './photos7';
import Photos8 from './photos8';

const App = () =>{
  return(
    <div className="a1">
      <div className='top'>
        <h1 style={{margin:'0px'}}>
          ❤️Lucky Website❤️
        </h1>
      </div>
      <div className='top2'>
        <p style={{margin:'0px'}}>Alias</p>
        <h2 style={{margin:'0px'}}>❤️Dhanvika❤️</h2>
      </div>
      <div>
        <h1 className='top3' style={{margin:'4px'}} >😍Welcome to my Website😍</h1>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/photos1' element={<Photos1/>}/>
          <Route path='/photos2' element={<Photos2/>}/>
          <Route path='/photos3' element={<Photos3/>}/>
          <Route path='/photos4' element={<Photos4/>}/>
          <Route path='/photos5' element={<Photos5/>}/>
          <Route path='/photos6' element={<Photos6/>}/>
          <Route path='/photos7' element={<Photos7/>}/>
          <Route path='/photos8' element={<Photos8/>}/>
        </Routes>

      </div>
    </div>
  )
}
export default App;