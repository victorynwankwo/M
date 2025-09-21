import React from "react";
import styled from "styled-components"

const RouterError = () => {
  return (
    < ErrorCon>
      <h1>404 page <br />not found</h1>
    </ErrorCon>
  );
};

export default RouterError;

const ErrorCon = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #202124;
  display: flex;
  justify-content: center;
  align-items: center;
  h1{
    color: #ACACAC;
    font-size: 8rem;
  }
`