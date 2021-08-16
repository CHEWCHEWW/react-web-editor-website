import React from "react";
import styled from "styled-components";

interface MainButtonProps {
  name?: string;
  onClick?: () => void;
}

const MainButton: React.FC<MainButtonProps> = ({
  name,
  onClick,
  children,
}): React.ReactElement => {
  return (
    <Button name={name} onClick={onClick}>
      {children}
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 2.5rem;
  margin: 0.8rem;
  background-color: #04012b;
  border: 0;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
`;

export default MainButton;
