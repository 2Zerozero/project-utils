import React, { useState } from "react";
import * as S from "./style";
import CarouselData from "../../utils/CarouselData.json";

const CarouselFuntion = () => {
  // 슬라이드 인덱스
  const [currentIndex, setCurrentIndex] = useState(0);

  // 슬라이드 아이템
  const items = CarouselData;

  // 1. 슬라이드 인덱스 에서, 1을 빼고 배열의 길이를 더한다.
  // 2. 배열 길이로 나눈 나머지 = newIndex
  // 3. 슬라이드가 처음부터 순환하게 되는 원리.

  // 이전 슬라이드 이동
  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + items.length) % items.length;
    setCurrentIndex(newIndex);
  };

  // 다음 슬라이드 이동
  const goToNextSlide = () => {
    // currentIndex가 0이고 items.length가 3이라면 (0 + 1) % 3 === 1 다음 인덱스는 1이 된다.
    const newIndex = (currentIndex + 1) % items.length;
    setCurrentIndex(newIndex);
  };

  return (
    <S.CarouselWrap>
      <S.NextButton onClick={goToNextSlide}>앞으로</S.NextButton>
      <S.PrevButton onClick={goToPrevSlide}>뒤로</S.PrevButton>
      {/* translate={-currentIndex * 600} 는 width 값과 똑같이 설정한다. */}
      <S.Container translate={-currentIndex * 600}>
        {/* 슬라이드 내부 Map */}
        {items.map((item, index) => (
          <S.Slide
            key={index}
            className={index === currentIndex ? "active" : ""}
          >
            <p>{item.title}</p>
            <p>{item.content}</p>
          </S.Slide>
        ))}
      </S.Container>
    </S.CarouselWrap>
  );
};

export default CarouselFuntion;
