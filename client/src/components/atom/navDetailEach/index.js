import './index.css';


const NavDetailEach=(props)=>{

    function iconDisplay(arr)
    {
        var lis=[];
        for(var k=0;k<arr.length;k++)
        {
            lis.push(<img src={arr[k]} />)
        }
        return lis;
    }


    function navdisplayeach(val,key,icon)
    {
        console.log(icon)
        var lis=[];
        for(var j=0;j<val.length;j++)
        {
            if(key===1)
            {
                lis.push(
                    <>
                    <div className="white__line__outer">
                        <div className="white__line"></div>
                    </div>
                    <div className="navdetaileach__each__each" style={{marginTop:"10px"}}>
                        {val[j]}
                    </div>
                    </>
                )
            }
            else if(key===4)
            {
                if(j===val.length-1)
                {
                    lis.push(
                        <>
                        <div className="navdetail__each__heading">
                            {val[j]}
                        </div>
                        <div className="white__line__outer">
                            <div className="white__line"></div>
                        </div>
                        <div className="navdetail__each__heading" style={{display:"flex",alignItem:"center",justifyContent:"space-around",width:"80%"}}>
                            {iconDisplay(icon)}
                        </div>
                        </>
                    )
                }
                else
                {
                    lis.push(
                        <>
                        <div className="navdetail__each__heading">
                            {val[j]}
                        </div>
                        <div className="white__line__outer">
                            <div className="white__line"></div>
                        </div>
                        </>
                    )
                }
                
            }
            else{
                lis.push(
                    <>
                    <div className="navdetaileach__each__each">
                        {val[j]}
                    </div>
                    </>
                )
            }
            
        }
        return lis;
    }
    return (
        <>
        {navdisplayeach(props.data,props.ele,props.icon)}
        </>
    );
}

export default NavDetailEach;
