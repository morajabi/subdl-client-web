/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

import Container from './Container';
import Cover from './Cover';

// import loganPoster from '../assets/images/demo/logan-poster.jpg';
import loganPoster from '../assets/images/demo/winter-soldier-poster.jpg';

const PaddedContainer = styled(Container)`
  padding-top: 60px;
`;

const MovieCover = styled(Cover)`
  with: 100%;
  min-height: 450px;
  background: #000;
`;


const Subtitles = (props: any) => (
  <div {...props}>
    <MovieCover>
      <PaddedContainer>
        <img src={loganPoster} width="200px" />
      </PaddedContainer>
    </MovieCover>
  </div>
);

export default Subtitles;
