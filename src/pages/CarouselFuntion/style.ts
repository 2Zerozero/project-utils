import { styled } from "styled-components";

export const CarouselWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  overflow: hidden;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: transparent;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
`;

export const PrevButton = styled(Button)`
  left: 10px;
`;

export const NextButton = styled(Button)`
  right: 10px;
`;

export const Container = styled.div<{ translate: number }>`
  display: flex;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${(props) => props.translate}px);
`;

export const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 100%;
  transition: opacity 0.5s ease-in-out;
  opacity: 0;

  &.active {
    opacity: 1;
  }
`;
