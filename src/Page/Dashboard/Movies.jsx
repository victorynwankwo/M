import React from "react";
import {MovieCon} from "./MovieStyle"
import {TopTrending, popular, seriesData} from "../../components/movie_data_full"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  var settings = {
    dots:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay :true,
    autoplaySpeed:1000
  };
  const nav = useNavigate()
  return <MovieCon>
    <article className="entire-wrapper">
         <Slider {...settings}>
          {TopTrending.map((trend,index)=>(
           <div className="carou100sel-main" key={index}>
            <img src={trend.image}  className="images"/>

             </div>
             
          ))}
            </Slider>
            
   <section className="section-wrapper">
 <h1 className="top-trend">Top-TRENDING</h1>
            <nav className="trend-holder">
     {TopTrending.map((e,index)=>(
      <div key={index} className="card-trend">
 <img src={e.image}  className="image-card" onClick={()=>{nav("/describe")}} />
  <h3 className="title">{e.title}</h3>
  <p className="year"> Year:{e.year}</p>
 <div className="rate-holder">
  <span className="rate">{e.rating}</span>
     </div>
    </div>
      ))}
    </nav>
    

 <h1 className="top-trend">POPULAR</h1>
<nav className="trend-holder">
{popular.map((e,index)=>(
  <div key={index} className="card-trend">
   <img src={e.image} alt="" className="image-card" onClick={()=>{nav("/describe")}} />
   <h3 className="title">{e.title}</h3>
   <p className="year"> Year:{e.year}</p>
   <div className="rate-holder">
   <span className="rate">{e.rating}</span>
   </div>
  </div>
))}
</nav>


 <h1 className="series-trend">SERIES</h1>
<nav className="series-holder">
{seriesData.map((e,index)=>(
  <div key={index} className="series-key-trend">
   <img src={e.image} alt="" className="image-card-series" onClick={()=>{nav("/describe")}} />
   <h3
    className="title-series">{e.title}</h3>
   <p className="year-series"> Year:{e.year}</p>
   <div className="rate-holder-series">
   <span className="rate-series">{e.rating}</span>
   </div>
  </div>
))}
</nav>
 </section>
    </article>
        
           
  </MovieCon>;
};

export default Movies;

