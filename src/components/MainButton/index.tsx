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
  border: 0;
  border-radius: 10px;
`;

export default MainButton;
