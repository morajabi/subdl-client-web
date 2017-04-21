/* @flow */
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
  0%, 100% {
    transform: scale(0);
  }

  50% {
    transform: scale(1);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: ${props => props.size};
  height: ${props => props.size};
`;

const Circle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: ${props => props.color};
  opacity: 0.6;
  position: absolute;
  top: 0;
  left: 0;
  animation: ${bounce} 2.0s infinite ease-in-out;
`;

const SecondCircle = styled(Circle)`
  animation-delay: -1.0s;
`;

export const Bounce = ({ color = '#ddd', size = '40px', ...props }: { color: string, size: string }) => (
  <Wrapper 
    size={size} 
    {...props}
  >
    <Circle color={color} />
    <SecondCircle color={color} />
  </Wrapper>
);
