/* @flow */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';

import Badge from './Badge';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PosterWrapper = styled.div`
  width: ${props => props.defaultPoster ? '75px' : 'auto'};
  height: 100%;
  ${props => props.align === 'right' ? css`
    order: 1;
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
`;

const Poster = styled.img`
  height: 100%;
  display: block;
`;

const Info = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const Title = styled.div`
  font-size: 1.1em;
  margin: 0 10px 0 0;

  & cite {
    font-style: normal;
  }
`;

const Year = styled.div`
  font-size: 1.1em;
  letter-spacing: 1px;
  opacity: .4;

  &:before {
    content: '/';
    margin-right: 5px;
    opacity: 0.6;
  }
`;

const Subtitles = styled.div`
  width: 100%;
  flex: 1 0 auto;
  margin-top: 6px;
  font-size: .9em;
  letter-spacing: .5px;
  opacity: .4;
`;

type Props = {
  posterPath?: any,
  posterAlign?: 'right' | 'left',
  defaultPoster?: boolean,
  title: string,
  year: number | string,
  subtitlesCount: number,
  mediaType: 'tv' | 'movie',
}

const MovieItem = ({
  posterPath = false,
  posterAlign = 'left',
  defaultPoster = false,
  title,
  year,
  subtitlesCount,
  mediaType,
  ...props
}: Props) => (
  <Wrapper {...props}>
    <PosterWrapper align={posterAlign} defaultPoster={defaultPoster}>
      {posterPath && <Poster src={posterPath} />}
    </PosterWrapper>
    <Info>
      <Title><cite>{title}</cite></Title>
      {year &&
        <Year separator>{String(year)}</Year>
      }
      {subtitlesCount &&
        <Subtitles>more than {subtitlesCount} subtitles</Subtitles>
      }
      {mediaType && mediaType === 'tv' &&
        <Badge style={{ marginLeft: 10 }}>{mediaType.toUpperCase()}</Badge>
      }
    </Info>
  </Wrapper>
);

export default MovieItem;
