
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

const App=(props)=>{


  const [navDisplay,setNavDisplay]=useState({
      nav:"none",
      homepage:"block", 
  });
  const [flagState,setFlagState]=useState("homepage");

  function openNav(x)
  {
    switch(x) {
      case "homepage":
        setNavDisplay({nav:"block",homepage:"none"});
        setFlagState(x);
        break;
      default:
        console.log("working fully");
    }
  }

  function closeNav()
  {
    switch("nav") {
      case "nav":
        setNavDisplay({nav:"none",flagState:"block"});
        setFlagState("nav");
        break;
      default:
        console.log("working fully");
    }
  }




  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage navDisplay={navDisplay} openNav={openNav} closeNav={closeNav} />} ></Route>
        <Route path="/our-profile" element={<OurProfile/>} ></Route>
        <Route path="/leadership" element={<Leadership/>} ></Route>
        <Route path="/vision-value" element={<VisionValue/>} ></Route>
        <Route path="/milestone" element={<Milestone/>} ></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
