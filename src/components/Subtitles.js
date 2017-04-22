/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

import Container from './Container';
import TopNav from './TopNav';
import Cover from './Cover';

import winterSoldierPoster from '../assets/images/demo/winter-soldier-poster.jpg';

const PaddedContainer = styled(Container)`
  padding-top: 70px;
`;

const MovieCover = styled(Cover)`
  with: 100%;
  min-height: 450px;
  background: #000;
`;

const Poster = styled.img`
  max-width: 210px;
  display: block;
  box-shadow: 0 5px 9px rgba(0, 0, 0, .3)
`;


const Subtitles = (props: any) => (
  <div {...props}>
    <MovieCover>
      <header>
        <TopNav 
          searchBar={false} 
          currentColor={true}
        />
      </header>
      <PaddedContainer>
        <Poster src={winterSoldierPoster} data-grade={true} />
      </PaddedContainer>
    </MovieCover>
  </div>
);

export default Subtitles;
