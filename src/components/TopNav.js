/* @flow */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { media, truncate } from '../utils/styleUtils';

// images
import logoType from '../assets/images/subdl-logotype.svg';

const Wrapper = styled.div`
  width: 100%;
  position: absolute;
  padding: 0 27px;
`;

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.a`
  width: 75px;
  height: 75px;
  padding: 8px 8px;
  margin: -15px 0 0 0;
  display: flex;
  align-items: flex-end;
  background: #FFEE2B;
  cursor: pointer;
  transition: all .6s cubic-bezier(1, 0, 0, 1);

  &:hover {
    transform: translate3d(0, 15px, 0);
  }
`;

const Nav = styled.div`
  display: flex;
`;

const RightNav = styled(Nav)`
  margin-left: 30px;  
  justify-content: flex-start;
  align-items: flex-end;

  ${media.to.medium`
    display: none;
  `}
`;

const LeftNav = styled(Nav)`
  justify-content: flex-end;
  align-items: flex-end;
`;

const NavItem = styled.a`
  padding: 7px 0; /* same as NavSeparator */
  margin: 0 15px 0 15px;
  font-size: 15px;
  letter-spacing: .5px;
  ${props => props.currentColor ? css`
    text-shadow: 1px 1px 0px rgba(122, 122, 122, 0.7);
    color: currentColor;
  ` : css`
    text-shadow: 1px 1px 0px #fff;
    color: ${props => props.blue ? '#2F80ED' : '#333'};
  `}
    cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.4;
  }
`;

const NavSeparator = styled.span`
  padding: 7px 0; /* same as NavItem */
  color: currentColor;
  opacity: .5;
  cursor: default;
`;

/**
 * Top Navigation
 * @param {boolean} searchBar - Wheather show the search bar in center 
 */
const TopNav = ({ searchBar = false, currentColor = false }: { searchBar: boolean, currentColor?: boolean }) => {
  return (
    <Wrapper>
      <FlexWrapper>

        <RightWrapper>
          <Logo href="https://subdl.com">
            <img src={logoType} alt="Subdl: Download subtitle for any movie in any language" />
          </Logo>
          <RightNav>
            <NavItem href="/" currentColor={currentColor}>discover</NavItem>
            <NavItem href="/" currentColor={currentColor}>popular</NavItem>
            <NavItem href="/" currentColor={currentColor}>wishlist</NavItem>
          </RightNav>
        </RightWrapper>

        <LeftWrapper>
          <LeftNav>
            <NavItem href="/login" currentColor={currentColor}>login</NavItem>
            <NavSeparator>or</NavSeparator>
            <NavItem href="/signup" currentColor={currentColor} blue>signup</NavItem>
          </LeftNav>
        </LeftWrapper>

      </FlexWrapper>
    </Wrapper>
  );
};

export default TopNav;
