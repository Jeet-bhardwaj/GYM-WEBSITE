import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import Authimage from "../utils/Images/AuthImage.jpg";

const Container = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.bg};
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  background: blue;
  @media (max-width: 700px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute; // absolu
  width: 100px; // Adjust the width as needed
  top: 40px;
  left: 40px; // Adjust the position as needed
  z-index: 10;
  height: auto; // Maintain aspect ratio
`;

const Image = styled.img`

  position: relative;
  width: 100%; 
  height: 100%; 
  object-fit:cover; 
  
`;

const Right = styled.div`
  flex: 1;
  background: red;
`;

const Authentication = () => {
  const [login, setLogin] = useState(false);
  return (
    <Container>
      <Left>
        <Logo src={LogoImage} alt="Logo" />
        <Image src={Authimage} alt="Authentication Image" />
      </Left>
      <Right>{login ? <text>Don't have an account? SingUp </text> : <text>Already have an account</text>}</Right>
    </Container>
  );
};

export default Authentication;
