import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface BlockMessageProps {
  message: string;
  icon: IconDefinition;
}

const BlockMessage: React.FC<BlockMessageProps> = ({
  message,
  icon,
}): React.ReactElement => {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      window.navigator.clipboard.writeText("npm -i react-web-editor");

      setIsClicked(false);
    }
  }, [isClicked]);

  const handleMessageClick = (): void => {
    setIsClicked(true);
  };

  return (
    <MiniMessage onClick={handleMessageClick}>
      {message}
      <Icon>
        <FontAwesomeIcon icon={icon} />
      </Icon>
    </MiniMessage>
  );
};

const MiniMessage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 13rem;
  height: 2rem;
  margin: 2rem 0 0 -1rem;
  border-radius: 5px;
  border: 2px solid ${({ theme }) => theme.MiniCardGray};
  font-family: "Poppins", serif;
  cursor: pointer;
`;

const Icon = styled.div`
  margin: 0 0 0 0.5rem;
`;

export default BlockMessage;
