import NavbarAboutus from '../../molecule/NavbarAboutus';
import './index.css';
import CardType2 from '../../atom/cardType2';
import items from './../../assets/store/OurProfileData'



const OurProfile=(props)=>{



    function displayValueCard()
    {
      var img_lis=items.img;
      var name_lis=items.name;
      var info_lis=items.info;
      var li=[];
      for(var i=0;i<img_lis.length;i++)
      {
        li.push(<CardType2 img={img_lis[i]} name={name_lis[i]} info={info_lis[i]}/>)
      }
      return li;
    }

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
                    hello world
                </div>
              </div>



              <div className="OurProfile__center__display">
                <div className="OurProfile__center__head">
                    Our Values
                </div>
                <div className="OurProfile__center__list">
                  {displayValueCard()}
                </div>
              </div>
  
  
              <div className="OurProfile__team">
                  <div className="OurProfile__team__heading">
                      Our Team
                  </div>
                  <div className="OurProfile__team__card">
                      <div className="OurProfile__team__card__each">
                          <div className="OurProfile__team__card__title">
                            job title
                          </div>
                          <div className="OurProfile__team__card__name">
                            name
                          </div>
                          <div className="OurProfile__team__card__pic">

                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
    </>
  );
}

export default OurProfile;