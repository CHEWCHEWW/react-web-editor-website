import React from "react";
import styled from "styled-components";

const VarietyMessage: React.FC = (): React.ReactElement => {
  return (
    <TextBackground>
      <ShiningText>
        Hover your cursor to text, Make your style!
      </ShiningText>
    </TextBackground>
  );
};

const TextBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: #F5F5F5;
  box-shadow: inset 0.2rem 0.2rem 0.5rem #E0D9DC, inset -0.2rem -0.2rem 0.5rem #FFFFFF;
`;

const ShiningText = styled.div`
  width: 60%;
  margin: 2rem;
  text-align: center;
  font-size: 2.5rem;
  font-family: "Montserrat", serif;
  font-weight: 600;
  background: linear-gradient(45deg, #daac78, #e4b3c5, #88a8ee, #af8dd3);
  background-clip: text;
  background-size: 300% 300%;
  animation: gradient-text 3s ease infinite;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;

  @keyframes gradient-text {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
`;

export default VarietyMessage;
