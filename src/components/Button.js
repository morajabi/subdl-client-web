/* @flow */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

export const ResetedButton = styled.button`
  border: none;
  background: none;
  outline: none;
`;

const BaseButton = styled(ResetedButton)`
  min-height: 40px;
  padding: 7px 16px;
  font-size: 14px;
  cursor: pointer;
`;

const YellowButton = styled(BaseButton)`
  background: ${({ bgColor = '#ef4' }: { bgColor: string }) => bgColor};
  color: ${({ textColor = '#333' }: { textColor: string }) => textColor};
`;

const FlexWrapper = styled.span`
  height: 100%;
  display: flex;
  align-items: center;
  line-height: 1.5em;
`;

const Text = styled.span`
  font-size: 14px;
  letter-spacing: .5px;
`;

const Icon = styled.span`
  max-width: 30px;
  height: 20px;
  line-height: 20px;

  ${({ position = 'left' } : { position: 'right' | 'left' }) => position === 'left' ? css`
    padding: 0 10px 0 0;
  ` : css`
    padding: 0 0 0 10px;
    order: 2;
  `}

  font-weight: bold;
  
`;

export const Button = (
  { children, icon = null, iconPosition, bgColor, textColor, onClick, ...props }:
  { children: any, icon?: any, iconPosition?: 'right' | 'left', bgColor?: string, textColor?: string, onClick?: Function }
  ) => {
  return (
    <YellowButton 
      {...props}
      bgColor={bgColor}
      onClick={onClick}
    > 
      <FlexWrapper>
        {icon && 
          <Icon position={iconPosition}>{icon}</Icon>
        }
        <Text>{children}</Text>
      </FlexWrapper>
    </YellowButton>
  );
};

export default Button;
