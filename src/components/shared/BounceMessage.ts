import styled from "styled-components";

interface BounceMessageStyle {
  animation: string;
}

const BounceMessage = styled.div<BounceMessageStyle>`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: 3rem 0 1rem 0;
  height: 2.2rem;
  font-size: 35px;
  font-weight: 600;
  font-family: "Playfair Display", serif;
  z-index: 1;
  animation: ${({ animation }) => animation} 2s infinite;

  @keyframes bounce-down {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-20px);
    }

    60% {
      transform: translateY(-10px);
    }
  }

  @keyframes bounce-up {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }

    40% {
      transform: translateY(-20px);
    }

    60% {
      transform: translateY(-10px);
    }
  }

  .arrow {
    margin-left: 0.5rem;
  }
`;

export default BounceMessage;
