import './index.css';
import items from './../../assets/store/NavData'
import NavLocatorEach from './../../atom/NavLocatorEach/index'

const NavLocator=(props)=>{


    return (
    <>
    <div className='navlocator__outer'>
      <div className='navlocator__inner'>
              {items.map((item) => {
                  const {id,heading,data,icon}=item;
                  if(id===4)
                  {
                    return (
                        <>
                        <div key={id} className="navdetail__each">
                            <NavLocatorEach data={data} index={id} icon={icon}/>
                        </div>
                        </>
                    );
                  }
                  else
                  {
                    return (
                        <>
                        <div key={id} className="navdetail__each">
                            <div className="navdetail__each__heading">
                                {heading}
                            </div>
                            <div className="white__line__outer">
                                <div className="white__line"></div>
                            </div>
                            <NavLocatorEach data={data} index={id}/>
                        </div>
                        </>
                    );
                  }
              })}
          </div>
        
    </div>
    </>
  );
}

export default NavLocator;