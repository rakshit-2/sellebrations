import './index.css';
import items from './../../assets/store/NavData';
import NavDetailEach from './../../atom/navDetailEach/index'

const NavDetail=(props)=>{


	function displayNavData()
	{
		var li=[];
		for(var i=0;i<5;i++)
		{
			if(i===0)
			{
				li.push(
					<div className="navdetail__each" style={{border:"none"}}>
						<div className="navdetail__each__heading">
							{items[i].heading}
						</div>
						<NavDetailEach ele={i} data={items[i].data}/>
					</div>
				)
			}
			else if(i===4)
			{
				li.push(
					<div className="navdetail__each" style={{borderLeft:"2px solid white"}} >
						<NavDetailEach ele={i} data={items[i].data} icon={items[i].icon}/>
					</div>
				)
			}
			else
			{
				li.push(
					<div className="navdetail__each" style={{borderLeft:"2px solid white"}}>
						<div className="navdetail__each__heading">
							{items[i].heading}
						</div>
						<NavDetailEach ele={i} data={items[i].data}/>
					</div>
				)
			}
		}
		return li;
	}
  return (
    <>
    <div className="navdetail__outer">
			<div className="navdetail__inner">
				{displayNavData()}
			</div>
    </div>
    </>
  );
}

export default NavDetail;