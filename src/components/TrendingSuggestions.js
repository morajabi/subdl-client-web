/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../utils/styleUtils';

import trendingIcon from '../assets/images/trending-icon.svg';

const Wrapper = styled.div`
  padding: 13px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: .6px;
  color: #afafaf;
`;

const Icon = styled.div`
  width: 12px;
  height: 17px;
  margin-right: 8px;
  background: url(${trendingIcon}) no-repeat center center;
  background-size: contain;
`;

const Title = styled.div`
  margin-right: 8px;
  font-style: italic;
`;

const MovieLink = styled.a`
  margin-right: 8px;
  font-style: italic;
  opacity: .75;

  &:after {
    content: ',';
  }

  ${media.to.medium`
    display: none;

    &:first-child {
      display: inline-block;
    }
  `}
`;

const MoreLink = styled.a`
  margin-right: 8px;
  font-style: italic;
  opacity: .7;
`;

const TrendingSuggestions = (props: any) => (
  <Wrapper {...props}>
    <Icon />
    <Title>trending in India: </Title>
    <span>
      <MovieLink href="/subtitles">Moana</MovieLink>
      <MovieLink href="/subtitles">Rogue One</MovieLink>
      <MovieLink href="/subtitles">Force Awakens</MovieLink>
    </span>
    <MoreLink href="/">discover more →</MoreLink>
  </Wrapper>
);

export default TrendingSuggestions;
