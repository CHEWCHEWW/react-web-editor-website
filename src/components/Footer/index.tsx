import React from "react";
import styled from "styled-components";

const Footer: React.FC = (): React.ReactElement => {
  return (
    <Wrapper>

    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: fixed;
  width: 100%;
  height: 3rem;
  background-color: ${({ theme }) => theme.FooterBackgroundColor};
  margin: 25rem 0 0 0;
  bottom: 0;
`;

export default Footer;
