/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../utils/styleUtils';
import { getSearchLink } from '../utils/googleUtils';

import popCornFell from '../assets/images/popcorn-fell.svg';

const Wrapper = styled.article`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${media.to.medium`
    flex-direction: column;
    align-items: flex-start;
  `}
`;

const Image = styled.div`
  width: 400px;
  flex: 0 1 auto;
  ${media.to.medium`
    width: 350px;
  `}
`;

const Text = styled.div`
  flex: 1 0 auto;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 1.9em;
  
  ${media.to.medium`
    font-size: 1.5em;
  `}

  & strong {
    font-weight: bold;
  }
`;

const ToDoList = styled.ul`
  padding: 0 40px 0 0;
`;

const ToDo = styled.li`
  font-weight: normal;
  font-size: 1em;
  margin-top: 10px;
`;

const NoMatch = ({ query, ...props }: { query: string }) => (
  <Wrapper {...props}>
    <Text>
      <Title><strong>Sorry</strong>, there's no match for "{query}".</Title>
      <p>
        You may want to do one of following:
        <ToDoList>
          <ToDo>
            👀 &nbsp;Duble check whether <strong>"{query}"</strong> is correct?&nbsp;
            <a href={getSearchLink(query)} target="_blank">Let's Google it →</a>
          </ToDo>
          <ToDo>🤔 &nbsp;Is this a movie, serie, short film or music video?</ToDo>
          <ToDo>😞 &nbsp;Try again. Maybe it's our fualt. </ToDo>
        </ToDoList>
      </p>
    </Text>
    <Image>
      <img width="100%" src={popCornFell} />
    </Image>
  </Wrapper>
);

export default NoMatch;
