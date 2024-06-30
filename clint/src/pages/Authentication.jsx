import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media(max-width: 700px ){
  flex-direction: column;
  }
  `;
  
  const Left = styled.div`
  flex: 1; // Adjust flex property as needed
  background : blue;
  @media(max-width: 700px ){
  flex-direction: column;
  }
  `;
  
  const Right = styled.div`
  flex: 1; // Adjust flex property as needed
  background : red;
  @media(max-width: 700px ){
  flex-direction: column;
  }

`;

const Authentication = () => {
  return (
    <Container>
      <Left>L</Left>
      <Right>R</Right>
    </Container>
  );
};

export default Authentication;
