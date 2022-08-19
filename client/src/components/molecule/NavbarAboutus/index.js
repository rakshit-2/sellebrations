import './index.css';
import logo from './../../assets/images/navbar_img/navbar_logo_img.svg'

const NavbarAboutus=(props)=>{

    function displayLinks()
    {
        var li=[];
        var lis=["About Us","Bussiness & Brands","CSR","Media"];

        for(var i=0;i<4;i++)
        {
            li.push(
                <div className="NavbarAboutus__inner__right__each">
                    {lis[i]}
                </div>
            )
        }
        return li;
    }
    return(
    <>
    <div className="NavbarAboutus__outer">
        <div className="NavbarAboutus__inner">
            <div className="NavbarAboutus__inner__left">
                <img src={logo} className="NavbarAboutus__logo"/>
            </div>
            <div className="NavbarAboutus__inner__right">
                {displayLinks()}
            </div>
        </div>
    </div>
    </>
  );
}

export default NavbarAboutus;