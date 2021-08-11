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
      {children}
      <h3>{title}</h3>
      <h4>{description}</h4>
    </CardBord>
  );
};

const CardBord = styled.div`
  display: flex;
  flex-direction: column;
  width: 5rem;
  height: 8rem;

`;

export default MiniCard;
