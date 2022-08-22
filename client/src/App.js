
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {useState } from 'react';



// all imports from the organism section
import HomePage from './components/organism/HomePage/index';
import OurProfile from './components/organism/OurProfile/index';
import Leadership from './components/organism/Leadership/index';
import VisionValue from './components/organism/vision&value/index';
import Milestone from './components/organism/milestone/index';
import Csr from './components/organism/csr/index';

const App=(props)=>{


  const [navDisplay,setNavDisplay]=useState({
      nav:"none",
      nav1:"block",
  });

  function openNav(x)
  {
    setNavDisplay({nav:"block",nav1:"none",});
  }

  function closeNav()
  {
    setNavDisplay({nav:"none",nav1:"block",});
  }




  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage navDisplay={navDisplay} openNav={openNav} closeNav={closeNav} />} ></Route>
        <Route path="/our-profile" element={<OurProfile/>} ></Route>
        <Route path="/leadership" element={<Leadership navDisplay={navDisplay} openNav={openNav} closeNav={closeNav}/>} ></Route>
        <Route path="/vision-value" element={<VisionValue/>} ></Route>
        <Route path="/milestone" element={<Milestone/>} ></Route>
        <Route path="/csr" element={<Csr/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
