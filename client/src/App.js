
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
// import {useState } from 'react';



// all imports from the organism section
import HomePage from './components/organism/HomePage/index';






const App=(props)=>{
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
