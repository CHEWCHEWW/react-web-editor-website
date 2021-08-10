import React from "react";
import styled from "styled-components";

const Header: React.FC = ({ children }): React.ReactElement => {
  return (
    <HeaderBoard>
      <MenuField>
        {children}
      </MenuField>
    </HeaderBoard>
  );
};

const HeaderBoard = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 3rem;
  top: 0;
  left: 0;
  background-color: white;
  border-bottom: 1px solid #E8E8E6;
  z-index: 5;
`;

const MenuField = styled.div`
  display: flex;
  position: fixed;
  width: 12%;
  height: 3rem;
  justify-content: space-around;
  align-items: center;
  top: 0;
  right: 3rem;
  color: #CDCDC9 !important;
`;

export default Header;
