import './index.css';
import nav_close from './../../assets/images/nav_img/nav_cross_img.svg';
import NavDetail from './../../molecule/navDetail/index'

const Nav=(props)=>{
  return (
    <>
    <div className='nav__outer' style={{display:props.navDisplay.nav}}>
      <div className="nav__inner">
        <div className="nav__inner__navbar">
          <div className="nav__right">
            <div className="nav__right__icon">
              <img src={nav_close} className="nav__icon" alt="" onClick={()=>{props.closeNav("nav")}}/>
            </div>
            <div className="nav__right__search">
              <input type="text" placeholder="Search..." className="nav__search__field"/>
            </div>
          </div>
        </div>
        <NavDetail/>
      </div>
    </div>
    
    </>
  );
}

export default Nav;