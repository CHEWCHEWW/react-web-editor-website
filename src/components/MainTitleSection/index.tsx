import React from "react";
import styled from "styled-components";

import Description from "../shared/Description";

const MainTitleSection: React.FC = (): React.ReactElement => {
  return (
    <section>
      <Title>REACT WEB EDITOR</Title>
      <Description>A Simple WYSIWYG editor for react user</Description>
      <Description>It is light and simple library</Description>
    </section>
  );
};

const Title = styled.h1`
  margin: 3rem 0 0 0;
  font-size: 2.5rem;
  letter-spacing: 0.3rem;
`;

export default MainTitleSection;
