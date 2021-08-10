import React from "react";
import styled from "styled-components";

interface HeaderProps {
  menus: string[]
}

const Header: React.FC<HeaderProps> = ({ menus }): React.ReactElement => {
  return (
    <HeaderBoard>
      <MenuField>
        {menus.map((menu) => (
          <MenuName key={menu}>
            {menu}
          </MenuName>
        ))}
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
  background-color: white;
  border-bottom: 1px solid #E8E8E6;
`;

const MenuField = styled.div`
  display: flex;
  position: fixed;
  height: 3rem;
  align-items: center;
  top: 0;
  right: 15rem;
`;

const MenuName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin: auto;
  color: #DADAD7;
`;

export default Header;
