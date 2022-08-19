import './index.css';


const CardType1=(props)=>{

    
    return(
    <>
        <div className="cardtype1__each__card">
            <div className="cardtype1__each__card__image">
                <img src={props.img} className="cardtype1__each__card__image__img"/>
            </div>
            <div className="cardtype1__each__card__name">
                {props.name}
            </div>
            <div className="cardtype1__each__card__jobtitle">
                {props.job}
            </div>
        </div>
    </>
  );
}

export default CardType1;