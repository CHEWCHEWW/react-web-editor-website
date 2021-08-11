import React from "react";
import styled from "styled-components";

interface MiniCardProps {
  title: string
  description: string
}

const MiniCard: React.FC<MiniCardProps> = ({ 
  title, 
  description,
  children, 
}): React.ReactElement => {
  return (
    <CardBord>
      <Icon>
        {children}
      </Icon>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardBord>
  );
};

const CardBord = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  width: 22%;
  height: 90%;
  padding: 1rem;
  background-color: #acabab;
  border-radius: 0.25rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60%;
  font-size: 3.5rem;
`;

const Title = styled.h3`
  margin: 0;
  padding: 0;
`;

const Description = styled.h4`
  margin: 0;
  padding: 0;
`;

export default MiniCard;
