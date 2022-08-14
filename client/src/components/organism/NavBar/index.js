import './index.css';
import navbar_logo from './../../assets/images/navbar_img/navbar_logo_img.svg'
import navbar_icon from './../../assets/images/navbar_img/navbar_button_img.svg'
import NavPanel from './../Nav/index';






const NavBar=(props)=>{
  return (
    <>
    <div className="navbar__outer" style={{display:props.navDisplay.homepage}}>
      <div className="navbar__inner">
        <div className="navbar__left">
          <img src={navbar_logo} className="navbar__logo" alt=""/>
        </div>
        <div className="navbar__right">
          <div className="navbar__right__icon">
            <img src={navbar_icon} className="navbar__icon" alt="" onClick={()=>{props.openNav("homepage")}}/>
          </div>
          <div className="navbar__right__search">
            <input type="text" placeholder="Search..." className="navbar__search__field"/>
          </div>
        </div>
      </div>
    </div>
    <NavPanel navDisplay={props.navDisplay} closeNav={props.closeNav}/>
    </>
  );
}

export default NavBar;