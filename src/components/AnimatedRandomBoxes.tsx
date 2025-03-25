// https://wweb.dev/resources/animated-css-background-generator

"use client";

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  .area {
    position: relative;
    width: 100%;
    height: 100vh;
  }

  .circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  .circles li {
    position: absolute;
    display: block;
    list-style: none;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 25s linear infinite;
    bottom: -150px;
  }

  @keyframes animate {
    0% {
      transform: translateY(0) rotate(0deg);
      opacity: 1;
      border-radius: 0;
    }

    100% {
      transform: translateY(-1000px) rotate(720deg);
      opacity: 0;
      border-radius: 50%;
    }
  }
`

const getRandomValue = (min: number, max: number) => (Math.random() * (max - min) + min).toFixed(2);

export const RandomCircles = ({ length = 50 }: { length?: number }) => {
  const circles = Array.from({ length }, () => ({
    left: `${getRandomValue(0, 100)}%`,
    width: `${getRandomValue(10, 150)}px`,
    height: `${getRandomValue(10, 150)}px`,
    animationDelay: `${getRandomValue(0, 10)}s`,
    animationDuration: `${getRandomValue(10, 45)}s`,
  }));

  return (
    <Wrapper className='fixed top-0 right-0 bottom-0 left-0'>
      <div className="area">
        <ul className="circles">
          {circles.map((circle, index) => (
            <li
              key={'circle.' + index}
              style={{
                left: circle.left,
                width: circle.width,
                height: circle.height,
                animationDelay: circle.animationDelay,
                animationDuration: circle.animationDuration,
              }}
            ></li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
};

export default RandomCircles;
