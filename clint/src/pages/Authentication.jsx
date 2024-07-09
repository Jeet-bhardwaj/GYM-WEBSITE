import React, { useState } from "react";
import styled from "styled-components";
import LogoImage from "../utils/Images/Logo.png";
import Authimage from "../utils/Images/AuthImage.jpg";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

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
  @media (max-width: 700px) {
    display: none;
  }
`;

const Logo = styled.img`
  position: absolute;
  width: 100px;
  top: 20px;
  left: 20px;
  z-index: 10;
  height: auto;
`;

const Image = styled.img`
  position: relative;
  width: 100%;
  height: 100vh%;
  object-fit: cover;
  @media (max-width: 849px) {
    height: 100%;
  }
`;

const Right = styled.div`
  flex: 1;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 16px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  @media (max-width: 400px) {
    fomt-size: 14px;
  }
`;

const TextButton = styled.span`
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const Authentication = () => {
  const [login, setLogin] = useState("True");

  return (
    <Container>
      <Left>
        <Logo src={LogoImage} alt="Logo" />
        <Image src={Authimage} alt="Authentication Image" />
      </Left>
      <Right>
        {!login ? (
          <>
            <SignIn />
            <Text>
              Already have an account?{" "}
              <TextButton
                onClick={() => {
                  setLogin("True");
                }}
              >
                Log In
              </TextButton>
            </Text>
          </>
        ) : (
          <>
            <SignUp />
            <Text>
              Don't have an account?{" "}
              <TextButton
                onClick={() => {
                  setLogin("False");
                }}
              >
                Sign Up
              </TextButton>
            </Text>
          </>
        )}
      </Right>
    </Container>
  );
};

export default Authentication;
