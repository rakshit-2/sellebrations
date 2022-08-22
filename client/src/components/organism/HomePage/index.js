import './index.css';
import NavBar from './../NavBar/index';



const HomePage=(props)=>{
  return (
    <>
    <div className="home__outer">
      <NavBar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
    </div>
    
    </>
  );
}

export default HomePage;
