import React from "react";
import { styled } from "styled-components";
import Header from "../components/header";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Wrap>
      <Header />

      {/* 다양한 기능들로 이동 */}
      <ul>
        <li>
          <Link to="/carousel">Carousel</Link>
        </li>
      </ul>
    </Wrap>
  );
};

export default Main;

const Wrap = styled.div`
  width: 1440px;
  margin: 0 auto;
`;
