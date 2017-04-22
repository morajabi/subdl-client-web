/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';

import Container from './Container';


const PaddedContainer = styled(Container)`
  padding-top: 60px;
`;

const Cover = styled.div`
  with: 100%;
  min-height: 450px;
  background: #000;
`;

const Subtitles = (props: any) => (
  <div {...props}>
    <Cover>
      <PaddedContainer>

      </PaddedContainer>
    </Cover>
  </div>
);

export default Subtitles;
