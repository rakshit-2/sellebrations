import './index.css';
import NavbarAboutUs from './../../molecule/NavbarAboutus/index';
import Carousel from "react-multi-carousel";
import "./../../../../node_modules/react-multi-carousel/lib/styles.css";
import items from './../../assets/store/csrData';
const Csr=(props)=>{
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 750 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        dev: {
            breakpoint: { max: 749, min: 484 },
            items: 2,
            slidesToSlide: 1 // optional, default to 1.
          },
        mobile: {
          breakpoint: { max: 484, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
    <>
        <div className="csr__outer">
            <div className="csr__inner">
                <NavbarAboutUs/>
                <div className="csr__heading">
                    <div className="csr__heading__top">
                        CSR
                    </div>
                    <div className="csr__heading__bottom">
                        CSR at Sellebration
                    </div>
                </div>
                <div className="csr__seaction1">
                    <div className="csr__seaction1__left">
                        <div className="csr__section1__left__top">
                            <span className="csr__collen">“</span>
                            {items.seaction1.quote}
                            <span className="csr__collen">”</span>
                        </div>
                        <div className="csr__section1__left__bottom">
                            <span style={{fontStyle:"1.2rem",fontWeight:"700",color:"black"}}>{items.seaction1.name}</span>
                            <span style={{fontStyle:"1.2rem"}}>{items.seaction1.company}</span>
                        </div>
                    </div>
                    <div className="csr__seaction1__right">
                        <div className="csr__seaction1__right__inner">
                            <img src={items.seaction1.img} className="csr__seaction1__right__inner__img"/>
                        </div>
                    </div>
                </div>
                <div className="csr__seaction2">
                    <div className="csr__seaction2__heading">
                        Our Partnerships
                    </div>
                    <Carousel responsive={responsive} swipeable={true} draggable={true} containerClass="carousel-container" utoPlaySpeed={1000}
                    >
                        {items.section2.map((ele) => {
                            const {id,img}=ele;
                            return(
                                <div key={id} className='csr__seaction2__each'><img src={img} className="csr__crousal__img"/></div>
                            )
                        })}
                    </Carousel>
                </div>
                <div className='csr__seaction3'>
                    <div className="csr__heading">
                        <div className="csr__heading__bottom">
                            {items.section3.heading}
                        </div>
                    </div>
                    <div className="csr__seaction3__inner">
                        <div className='csr__seaction3__inner__left'>
                            {items.section3.quote} 
                        </div>
                        <div className='csr__seaction3__inner__right'>
                            <div className='csr__seaction3__inner__right__inner'>
                                <img src={items.section3.img} className="csr__seaction3__inner__right__inner__img"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default Csr;