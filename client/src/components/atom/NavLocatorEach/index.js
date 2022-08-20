import './index.css';

const NavLocatorEach=(props)=>{

    function iconDisplay(arr)
    {
        var lis=[];
        for(var k=0;k<arr.length;k++)
        {
            lis.push(<img src={arr[k]} />)
        }
        return lis;
    }
    return (
        <>
        {props.data.map((ele) => {
            const {id,info}=ele;
            if(props.index===4)
            {
                if(id===3)
                {
                    return (
                        <>
                        <div className="navdetail__each__heading">
                            {info}
                        </div>
                        <div className="white__line__outer">
                            <div className="white__line"></div>
                        </div>
                        <div className="navdetail__each__heading" style={{display:"flex",alignItem:"center",justifyContent:"space-around",width:"80%"}}>
                            {iconDisplay(props.icon)}
                        </div>
                        </>
                    );
                }
                else
                {
                    return (
                        <>
                        <div className="navdetail__each__heading">
                            {info}
                        </div>
                        <div className="white__line__outer">
                            <div className="white__line"></div>
                        </div>
                        </>
                    );
                }
            }
            else
            {
                return (
                    <>
                    <div key={id} className="navdetaileach__each__each">
                        {info}
                    </div>
                    </>
                );
            }
            
        })}
        </>
    );
}

export default NavLocatorEach;