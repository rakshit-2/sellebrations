import './index.css';
import NavbarAboutus from './../../molecule/NavbarAboutus/index';
import CardType1 from './../../atom/cardType1/index';
import items from './../../assets/store/LeadershipData';


const Leadership=(props)=>{

    function displayCards(x)
    {
      var image_lis=items[x].img;
      var name_lis=items[x].name;
      var job_lis=items[x].jobTitle;
      var li=[];

      for(var i=0;i<image_lis.length;i++)
      {
        li.push(<CardType1 name={name_lis[i]} img={image_lis[i]} job={job_lis[i]} />);
      }
      return li;
    }
    return(
    <>
    <div className="leadership__outer">
      <div className="leadership__inner">
        <NavbarAboutus/>

        <div className="leadership__seaction1">
          <div className="leadership__seaction1__heading">
            <div className="leadership__seaction1__heading__top">
              About Us
            </div>
            <div className="leadership__seaction1__heading__bottom">
              Leadership
            </div>
          </div>


          <div className="leadership__seaction1__innerheading">
            Directors
          </div>
          <div className="leadership__seaction1__innerdisplay">
            {displayCards("director")}
          </div>

          <div className="leadership__seaction1__innerheading">
            Inverstors
          </div>
          <div className="leadership__seaction1__innerdisplay">
            {displayCards("investor")}
          </div>

          <div className="leadership__seaction1__innerheading">
            Junior Leader
          </div>
          <div className="leadership__seaction1__innerdisplay">
            {displayCards("juniorLeader")}
          </div>
        </div>
      </div>
    </div>
      
      
    </>
  );
}

export default Leadership;