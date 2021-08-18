import React from "react";
import styled from "styled-components";

const Footer: React.FC = ({ children }): React.ReactElement => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 2rem;
  background-color: ${({ theme }) => theme.FooterBackgroundColor};
  bottom: 0;
  font-size: 0.5rem;
  color: #a39a9a;
`;

export default Footer;
