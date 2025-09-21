import styled from "styled-components"

export const MovieCon = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    justify-content: center;
.entire-wrapper{
    width: 100%;
    height: auto;
}
   .carousel-main{
    width: 69%;
    height: 70vh;
   }
   .images{
    width: 100%;
    height: 100%;
    cursor: pointer;
    object-fit: cover;
   }
  .section-wrapper{
    width: 100%;
    height: auto;
     margin-top: 1rem;
  }
  .top-trend{
    color: red;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
  }
  .trend-holder{
    width: 100%;
    height:60vh;
    color: #ACACAC;
    display: flex;
    gap: 1.5rem;
    margin-bottom: 2rem;
   }
 
.card-trend{
    width: 100%;
    height: 70%;
     background-color: #fff; 
}
  .image-card{
    width: 100%;
    height: 100%;
   }

  .title{
    color: black;
    font-size: 1.1rem;
    text-align: center;
  }
  .year{
    text-align: center;
    color: black;
  }
  .rate-holder{
    display: flex;
    justify-content: center;
  }
  .rate{
color: black;
  }
 .series-trend{
  color: red;
 }
 .series-holder{
display: flex;
flex-wrap: wrap;
gap: 1.5rem;
justify-content: center;
width: 100%;
 }
 .series-key-trend{
 box-sizing: border-box;
 background-color: #ACACAC;
 width:19%;
 }
 .image-card-series{
  height: 82%;
  width: 100%;
  object-fit: cover;
 }
 .title-series{
    color: black;
  font-size: 1.1rem;
  text-align: center;
 }
 .year-series{
   color: black;
font-size: 1rem;
text-align: center;
 }
 .rate-holder-series{
display: flex;
justify-content: center;
 }
.rate-series{
  color:black;
}
 `