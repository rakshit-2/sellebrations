import './index.css';

const CardType3=(props)=>{
  return (
    <>
    {props.items.map((ele) => {
        const {id,name,job,img}=ele;
        return(
            <div key={id} className="cardtype3__team__card__each">
                <div className="cardtype3__team__card__title">
                    {job}
                </div>
                <div className="cardtype3__team__card__name">
                    {name}
                </div>
                <div className="cardtype3__team__card__pic">
                <img src={img} className="cardtype3__team__card__pic__img"/>
                </div>
            </div>
        )     
    })}
    </>
  );
}

export default CardType3;