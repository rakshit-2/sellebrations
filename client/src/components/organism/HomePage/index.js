import './index.css';
import NavBar from './../NavBar/index';



const HomePage=(props)=>{
  return (
    <>
    <div style={{backgroundColor:'#4F6DA1'}}>
      <NavBar navDisplay={props.navDisplay} openNav={props.openNav}  closeNav={props.closeNav}/>
    </div>
    
    </>
  );
}

export default HomePage;
