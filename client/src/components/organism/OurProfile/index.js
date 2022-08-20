import NavbarAboutus from '../../molecule/NavbarAboutus';
import './index.css';
import CardType2 from '../../atom/cardType2';
import items from './../../assets/store/OurProfileData'
import logo from './../../assets/images/navbar_img/navbar_logo_img.svg';
import CardType3 from '../../atom/cardType3';

const OurProfile=(props)=>{


    return (
    <>
        <div className="OurProfile__outer">
          <div className="OurProfile__inner">
            <NavbarAboutus/>
              <div className="OurProfile__about">
                <div className="OurProfile__about__left">
                  <div className="OurProfile__about__heading">
                    About Us
                  </div>
                  <div className="OurProfile__about__he">
                    Our Profile
                  </div>
                  <div className="OurProfile__about__text">
                  Lorem Ipsum is simply dummy text 
                  of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's standard
                   dummy text ever since the 1500s, when an 
                   unknown printer took a galley of type and 
                   scrambled it to make a type specimen book and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                  </div>
                </div>
                <div className="OurProfile__about__right">
                    <div className="OurProfile__about__right__inner">
                      <img src={logo} className="OurProfile__about__right__inner__img"/>
                    </div>
                </div>
              </div>



              <div className="OurProfile__center__display">
                <div className="OurProfile__center__head">
                    Our Values
                </div>
                <div className="OurProfile__center__list">
                  <CardType2 items={items.ourValues}/>
                </div>
              </div>
  
  
              <div className="OurProfile__team">
                  <div className="OurProfile__team__heading">
                      Our team
                  </div>
                  <div className="OurProfile__team__card">
                    <CardType3 items={items.ourTeam}/>
                  </div>
              </div>
              <div className="OurProfile__team__leaderboad">
                <div className="OurProfile__team__leaderboad__button">
                  View Leadership
                </div>
              </div>
          </div>
        </div>
    </>
  );
}

export default OurProfile;