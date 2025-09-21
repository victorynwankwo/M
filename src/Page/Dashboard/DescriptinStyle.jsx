import styled from "styled-components"

export const DescrbeCon = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;

  .wrapper-description {
    width: 85%;
    height: auto;
  }

  .box {
    width: 100%;
    height: auto;
    margin-top: 0.8rem;
    display: flex;
    justify-content: space-between;
  }

  .left-column {
    width: 30%; 
    height: 50%;
  }

  .left-image {
width: 100%;
height: 100%;
object-fit: cover;
  
  }

  .right-column {
    width: 60%;
    height: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }


  .title-text {
    color: black;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 
      'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    text-align: center;
  }

  .text {
    width: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
  }

  .text p {
    font-size: 1.5rem;
  }

  .watch-btn-holder {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1rem;
  }

  .watch-btn {
    padding: 1rem;
    color: white;
    background-color: #5ca85c;
    border: none;
    cursor: pointer;
  }
`