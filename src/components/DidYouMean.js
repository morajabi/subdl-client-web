/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  margin: 15px 0 0 0;
  font-size: 1.2em;
  font-weight: normal;
  color: #09b797;
`;

const DidYouMeanLink = styled(Link)`
  font-weight: bold;
`;

export default ({ query }: { query?: string }) => (
  query ?
    <Wrapper>
      Did you mean:&nbsp;
      <DidYouMeanLink to={`/search?q=${query}`}>
        {query}
      </DidYouMeanLink>
    </Wrapper>
  : null
);
