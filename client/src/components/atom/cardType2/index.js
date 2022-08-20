import './index.css';


const CardType2=(props)=>{

    
    return(
    <>
    {props.items.map((ele) => {
        const {id,name,info,img}=ele;
        return(
        <div className="cardtype2__center__card">
            <div className="cardtype2__center__pic" >
                <img src={img} className="cardtype2__center__pic__img"/>
            </div>
            <div className="cardtype2__center__card__head">
                {name}
            </div>
            <div className="cardtype2_center__card__info">
                {info} 
            </div>
        </div>
        )
    })}
    </>
  );
}

export default CardType2;