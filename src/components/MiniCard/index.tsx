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
  width: 25%;
  height: 78%;
  min-height: 15.3rem;
  padding: 0.5rem;
  background-color: white;
  border-radius: 0.4rem;
`;

const Icon = styled.div<MiniCardStyle>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.7rem 0 1.7rem 0;
  width: 35%;
  color: ${({ color }) => color && color};
`;

const Title = styled.h3`
  margin: 0 0 0.5rem 0;
  padding: 0;
  font-weight: 600;
  color: #151331;
`;

const Description = styled.h4`
  width: 60%;
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 0.8rem;
  color: #8f8e8e;
`;

export default MiniCard;
