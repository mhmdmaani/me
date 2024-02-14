import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  height: ${(props) => props.height}px;
  overflow: hidden;
`;
const Flipped = styled.div`
  transition: transform 1s ease-in-out, opacity 1.1s ease-in-out;
  transform: translateY(-${(props) => props.currentIndex * props.height}px);
`;
const Section = styled.div`
  height: ${(props) => props.height}px;
  width: 100%;
  font-size: ${(props) => props.height}px;
  transition: opacity 0.7s ease-in-out;
  opacity: ${(props) => (props.isDisplayed ? '1' : '0')};
`;

function TitleFlipper({ height, texts = [], currentIndex, props }) {
  return (
    <StyledContainer height={height}>
      <Flipped currentIndex={currentIndex} height={height}>
        {texts.map((c, index) => (
          <Section
            key={c?.id}
            currentIndex={currentIndex}
            height={height}
            isDisplayed={index === currentIndex}
          >
            {c.text}
          </Section>
        ))}
      </Flipped>
    </StyledContainer>
  );
}

export default TitleFlipper;
