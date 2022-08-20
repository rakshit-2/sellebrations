import './index.css';
import NavbarAboutus from './../../molecule/NavbarAboutus/index';
import CardType1 from './../../atom/cardType1/index';
import items from './../../assets/store/LeadershipData';


const Leadership=(props)=>{


    function innerDisplayCard(x,k)
    {
      var image_lis=items[x].img;
      var name_lis=items[x].name;
      var job_lis=items[x].jobTitle;
      var li=[];
      for(var i=k;i<k+4;i++)
      {
        if(name_lis[i]!=undefined)
        {
          li.push(<CardType1 name={name_lis[i]} img={image_lis[i]} job={job_lis[i]} />);
        }
      }
      return li;
    }
    function displayCards(x)
    {
      var image_lis=items[x].img;
      var li=[];
      var ele=parseInt(image_lis.length/4)+1;
      console.log(ele)
      var k=0;
      for(var j=0;j<ele;j++)
      {
        if(j===ele-1)
        {
          var a=<div className="leadership__seaction1__innerdisplay__each2">{innerDisplayCard(x,k)}</div>
          k+=4;
        }
        else
        {
          var a=<div className="leadership__seaction1__innerdisplay__each">{innerDisplayCard(x,k)}</div>
          k+=4;
        }
        li.push(a);
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