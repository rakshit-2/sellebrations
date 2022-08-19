import NavbarAboutus from '../../molecule/NavbarAboutus';
import './index.css';


const OurProfile=(props)=>{

    // function display()
    // {
    //     var li=[];
    //     var a=
    //     <div style={{width:"100px",height:"200px",backgroundColor:"cyan"}}>
    //         Leadership
    //     </div>
    //     for(var i=0;i<4;i++)
    //     {

    //         li.push(a);
    //     }
    //     return li;
    // }

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
                   scrambled it to make a type specimen book.
                   It has survived not only five centuries, 
                   but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was 
                    popularised in the 1960s with the release 
                    of Letraset sheets containing Lorem Ipsum 
                    passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
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
                <div className="OurProfile__center__card">
                    <div className="OurProfile__center__pic" >
                        
                    </div>
                    
                      <div className="OurProfile__center__card__head">
                        Lorem Ipsum
                      </div>
                      <div className="OurProfile__center__card__info">
                      Lorem Ipsum is simply dummy text 
                  of the printing and typesetting industry.
                   Lorem Ipsum has been the industry's 
                    </div>
                </div>
                </div>

              </div>
              <div className="OurProfile__team">
                  <div className="OurProfile__team__heading">
                      Our Team
                  </div>
                  <div className="OurProfile__team__card">
                      <div className="OurProfile__team__card__title">
                          <div>
                            job title
                            <div>
                              name
                            </div>
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