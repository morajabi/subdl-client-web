/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.footer`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 15px 27px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const LeftWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;
`;

const RightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

const Item = styled.a`
  padding: 5px 0;
  margin: 0 11px 0 11px;
  font-size: 13px;
  letter-spacing: .4px;
  text-shadow: 1px 1px 0px #fff;
  color: #999;
  white-space: nowrap;

  &:first-child {
    padding-left: 0;
  }

  &:last-child {
    padding-right: 0;
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`;

const MuteItem = styled(Item)`
  color: #aaa;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }
`;

const BgCaption = styled.div`
  padding-left: 10px;
  display: flex;
  flex-flow: column;
  text-align: right;
`;

const MovieTitle = styled.a`
  font-weight: bold;
  font-size: 1.2em;
  line-height: 1.5em;
  letter-spacing: .7px;
  color: #f2f2f2;
  opacity: .8;

  & cite {
    font-style: normal;
  }

  &:hover {
    opacity: 1;
  }
`;

const Actor = styled.a`
  font-weight: 300;
  font-size: .8em;
  letter-spacing: .7px;
  color: #f2f2f2;
  opacity: .8;
`;

const Footer = ({ showBgCaption = false }: { showBgCaption?: boolean }) => (
  <Wrapper>
    <LeftWrapper>
      <Item href="/">Privacy</Item>
      <Item href="/">Terms</Item>
      <MuteItem>© SUBDL.</MuteItem>
    </LeftWrapper>
    <RightWrapper>
      {showBgCaption &&
        <BgCaption>
          <MovieTitle href="/subtitles/logan-2017"><cite>Logan</cite></MovieTitle>
          <Actor>Hugh Jackman</Actor>
        </BgCaption>
      }
    </RightWrapper>
  </Wrapper>
);

export default Footer;
