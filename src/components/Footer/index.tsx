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
  height: 10rem;
  background-color: #E6D6D2;
  /* border-top: 1px solid #c5c3c3; */
  margin: 10rem 0 0 0;
  bottom: 0;
`;

export default Footer;
