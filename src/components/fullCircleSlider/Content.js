import React from 'react';
import styled from 'styled-components';
import TitleFlipper from '../shared/TitleFlipper';

const MovableTitle = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  text-align: center;
  width: 100%;
  @media (max-width: 600px) {
    font-size: 2rem;
    width: 100%;
  }
`;

const StyledDescription = styled.div`
  font-size: 22px;
  line-height: 1.5;
  color: #f0f0f0;
  font-weight: 400;
  width: 70%;
  margin: 20px auto;
  @media (max-width: 1200px) {
    font-size: 12px;
    width: 75%;
  }
  @media (max-width: 600px) {
    font-size: 10px;
    width: 75%;
  }
`;
export default function Content({ currentIndex, items }) {
  return (
    <div>
      <TitleFlipper
        height={80}
        texts={items.map((c) => ({
          id: c.id,
          text: <MovableTitle>{c.title}</MovableTitle>,
        }))}
        currentIndex={currentIndex}
      />
      <TitleFlipper
        height={400}
        texts={items.map((c) => ({
          id: c.id,
          text: <StyledDescription>{c.description}</StyledDescription>,
        }))}
        currentIndex={currentIndex}
      />
    </div>
  );
}
