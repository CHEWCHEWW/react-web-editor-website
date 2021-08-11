import React from "react";
import styled from "styled-components";

interface MiniCardProps {
  title: string
  description: string
  color?: string
}

interface MiniCardStyle {
  color?: string
}

const MiniCard: React.FC<MiniCardProps> = ({ 
  title, 
  description,
  color,
  children, 
}): React.ReactElement => {
  return (
    <CardBord>
      <Icon color={color}>
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
  width: 13rem;
  height: 15rem;
  padding: 0.5rem;
  background-color: #acabab;
  border-radius: 0.25rem;
`;

const Icon = styled.div<MiniCardStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.6rem 0 1.7rem 0;
  width: 4rem;
  color: ${({ color }) => color && color};
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-weight: 600;
`;

const Description = styled.h4`
  width: 9rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 0.8rem;
  color: #C7C5C5;
`;

export default MiniCard;
