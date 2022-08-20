import './index.css';
import NavbarAboutus from './../../molecule/NavbarAboutus/index'
import left from './../../assets/images/milestone_img/hand-finger-left-icon.svg'
import right from './../../assets/images/milestone_img/hand-finger-right-icon.svg'



const Milestone=(props)=>{
    return (
    <>
      <div className="milestone__outer">
        <div className="milestone__inner">
          <NavbarAboutus/>

          <div className="milestone__heading">
            <div className="milestone__heading__top">
              About Us
            </div>
            <div className="milestone__heading__bottom">
              Milestones
            </div>
          </div>

          <div className="milestone__display__inner">
            <div className="milestone__display__inner__middle"></div>
            <div className="milestone__display__inner__heading__inner">
              2022
            </div>
            <div className="milestone__display__inner__inner1">
              <div className="milestone__display__inner__inner__right">
                <div className="milestone__display__inner__inner__ele"></div>
                <div className="milestone__display__inner__inner__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </div>
            </div>
            <div className="milestone__display__inner__inner2">
              <div className="milestone__display__inner__inner__left">
                <div className="milestone__display__inner__inner__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="milestone__display__inner__inner__ele"></div>
              </div>
            </div>



            <div className="milestone__display__inner__heading__inner">
              2021
            </div>
            <div className="milestone__display__inner__inner1">
              <div className="milestone__display__inner__inner__right">
                <div className="milestone__display__inner__inner__ele"></div>
                <div className="milestone__display__inner__inner__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </div>
            </div>
            <div className="milestone__display__inner__inner2">
              <div className="milestone__display__inner__inner__left">
                <div className="milestone__display__inner__inner__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="milestone__display__inner__inner__ele"></div>
              </div>
            </div>
            <div className="milestone__display__inner__inner1">
              <div className="milestone__display__inner__inner__right">
                <div className="milestone__display__inner__inner__ele"></div>
                <div className="milestone__display__inner__inner__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
              </div>
            </div>
            <div className="milestone__display__inner__inner2">
              <div className="milestone__display__inner__inner__left">
                <div className="milestone__display__inner__inner__info">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </div>
                <div className="milestone__display__inner__inner__ele"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Milestone;