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

const Poster = styled.img`
  display: block;
  height: 100%;
  ${props => props.align === 'right' ? css`
    order: 1;
    margin-left: 20px;
  ` : css`
    margin-right: 20px;
  `}
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
  posterAlign: 'right' | 'left',
  title: string,
  year?: number | string,
  subtitlesCount?: number,
  mediaType?: 'tv' | 'movie',
}

const MovieItem = (
    {
      posterPath = false,
      posterAlign = 'left',
      title,
      year,
      subtitlesCount,
      mediaType,
      ...props
    }: Props
  ) => {
  return (
    <Wrapper {...props}>
      {posterPath && <Poster src={posterPath} align={posterAlign} />}
      <Info>
        <Title><cite>{title}</cite></Title>
        <Year separator={true}>{String(year)}</Year>
        {subtitlesCount &&
          <Subtitles>more than {Number(subtitlesCount)} subtitles</Subtitles>
        }
        {mediaType && mediaType === 'tv' &&
          <Badge style={{ marginLeft: 10 }}>{mediaType.toUpperCase()}</Badge>
        }
      </Info>
    </Wrapper>
  );
};

export default MovieItem;
