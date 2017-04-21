/* @flow */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { map } from 'lodash';
import { v4 } from 'uuid';

import MovieItem from './MovieItem';

const Box = styled.div`
  width: 100%;
  background: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .15);
`;

const ResultRow = styled.div`
  width: 100%;
  padding: ${props => props.withPoster ? '0 0 0 10px' : '7px 10px'};
  border-bottom: 1px solid #e5e5e5;
  cursor: pointer;

  &:hover {
    background: #f3f3f3;
  }
`;

const MovieItemWithPoster = styled(MovieItem)`
  height: 110px;
  padding: 0;
`;

/**
 * Results Box for Search Box
 */
const ResultsBox = ({ items = [], ...props }: { items: Array<Object> }) => (
  <Box {...props}>
    {map(items, (item, i) => {
      if(i === 0) {
        // render with poster in the first item
        return (
          <ResultRow 
            key={v4()} 
            withPoster={true}
          >
            <MovieItemWithPoster
              posterAlign="right"
              {...item}
            />
          </ResultRow>
        );
      }

      // render without poster
      return (
        <ResultRow key={v4()}>
          <MovieItem 
            {...item} 
            posterUrl={false}
          />
        </ResultRow>
      );
    })}
  </Box>
);

export default ResultsBox;
