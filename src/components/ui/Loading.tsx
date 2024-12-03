import React from 'react';
import styled from 'styled-components';

const Loading = () => {
  return (
    <Background>
      <Loader />
    </Background>
  );
};

export default Loading;

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgb(255, 255, 255, 0.6);
  z-index: 999;
  /* 추가: 클릭 차단 */
  pointer-events: all;
`;

export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 60px;
  aspect-ratio: 4;
  background: radial-gradient(circle closest-side, var(--brandColor) 90%, #0000) 0 / calc(100% / 3)
    100% space;
  clip-path: inset(0 100% 0 0);
  animation: l1 1s steps(4) infinite;

  @keyframes l1 {
    to {
      clip-path: inset(0 -34% 0 0);
    }
  }
`;
