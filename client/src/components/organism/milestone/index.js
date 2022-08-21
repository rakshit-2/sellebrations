import './index.css';
import NavbarAboutus from './../../molecule/NavbarAboutus/index'
import items from './../../assets/store/milestoneData';



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
           {items.map((ele) => {
            const {id,year,data}=ele;
              return(
                <>
                  <div key={id} className="milestone__display__inner__heading__inner">
                    {year}
                  </div>
                  {data.map((elel) => {
                  const {id,info}=elel;
                  console.log(id,info)
                  if(id%2===0)
                  {
                    return(
                      <>
                      <div key={id} className="milestone__display__inner__inner1">
                        <div className="milestone__display__inner__inner__right">
                          <div className="milestone__display__inner__inner__ele"></div>
                          <div className="milestone__display__inner__inner__info">
                          {info}
                          </div>
                        </div>
                      </div>
                      </>
                    )
                  }
                  else
                  {
                    return(
                    <div key={id} className="milestone__display__inner__inner2">
                      <div className="milestone__display__inner__inner__left">
                        <div className="milestone__display__inner__inner__info">
                        {info}
                        </div>
                        <div className="milestone__display__inner__inner__ele"></div>
                      </div>
                    </div>
                    )
                  }
                  })}
                </>
              )
            })}
          </div> 
        </div>
      </div>
    </>
  );
  
}

export default Milestone;