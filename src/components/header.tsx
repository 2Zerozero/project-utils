import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return <Title>메인 페이지</Title>;
};

export default Header;

const Title = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 34px;
`;
