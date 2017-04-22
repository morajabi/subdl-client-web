/* @flow */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { media } from '../utils/styleUtils';
import Overdrive from 'react-overdrive';

import Container from './Container';
import TopNav from './TopNav';
import SearchBox from './SearchBox';
import TrendingSuggestions from './TrendingSuggestions';

const PaddedContainer = styled(Container)`
  padding-top: 155px;

  ${media.to.medium`
    padding-top: 100px;  
  `}
`;

const Title = styled.h1`
  max-width: 500px;
  font-size: 2.4em;
  font-weight: normal;
  letter-spacing: .2px;

  ${media.to.medium`
    font-size: 1.8em;
  `}

  ${media.to.small`
    font-size: 1.5em;
  `}
`;

const Bold = styled.strong`
  font-weight: 600;
`;

const Home = () => (
  <div>
    <header>
      <TopNav searchBar={false} />
    </header>
    <PaddedContainer>
      <Link to="/search"><Title><Bold>Find perfect subtitles</Bold> in any language for any movie</Title></Link>
      <Overdrive id="search-box">
        <SearchBox loading={false} />
      </Overdrive>
      <TrendingSuggestions />
    </PaddedContainer>
  </div>
);

export default Home;
