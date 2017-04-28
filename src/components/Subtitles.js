/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors } from '../utils/styleUtils';
import { convert as convertColor } from 'css-color-function';

import Container from './Container';
import TopNav from './TopNav';
import Cover from './Cover';
import Button from './Button';
import Seasons from './Seasons';

import winterSoldierPoster from '../assets/images/demo/winter-soldier-poster.jpg';
// import moanaPoster from '../assets/images/demo/moana-poster.jpg';

const PaddedContainer = styled(Container)`
  padding-top: 95px;
`;

const MovieCover = styled(Cover)`
  with: 100%;
  min-height: 450px;
  background: #000;
`;

const Poster = styled.img`
  max-width: 190px;
  display: block;
  box-shadow: 0 5px 10px rgba(0, 0, 0, .3)
`;

const Movie = styled.div`
  with: 100%;
  display: flex;
  justify-content: flex-start;
`;

const MovieLeft = styled.div`
  flex: 0 0 auto;
`;

const MovieCenter = styled.div`
  flex: 1 1 auto;
  padding: 0 0 0 40px;
`;

const MovieRight = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 0 30px;
`;

const MovieTitle = styled.div`
  with: 100%;
  line-height: 1.5em;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: .8px;
`;

const MovieYear = styled.span`
  font-size: .8em;
  font-weight: 300;
  margin-left: 7px;
  opacity: .9;
`;

const Pilot = styled.p`
  line-height: 1.5em;
  font-size: 15px;
  font-weight: normal;
  padding: 18px 0 0 0;
`;

const PilotMore = styled.span`
  margin-left: 5px;
  color: ${colors.LINK_BLUE};
  cursor: pointer;

  &:hover {
    color: currentColor;
  }
`;

const InRowPairs = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const MovieRatings = styled(InRowPairs)`
  margin-top: 15px;
`;

const Pair = styled.div`
  margin: 13px 0 0 0;
  letter-spacing: .3px;
  font-size: 15px;
`;

const InRowPair = styled(Pair)`
  position: relative;
  margin-right: 12px;
  padding-right: 17px;

  &:after {
    content: '';
    width: 5px;
    height: 5px;
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -2px;
    border-radius: 4px;
    background: currentColor;
  }

  &:last-child {
    margin-right: 0;
    padding-right: 0;

    &:after {
      display: none;
    }
  }
`;

const PairKey = styled.span`
  font-weight: 300;
  opacity: .8;
  margin-right: 12px;
`;

const PairValue = styled.span`
  font-weight: normal;
`;

const IMDbRateValue = styled(PairValue)`
  font-weight: bold;
  letter-spacing: .5px;

  &:after {
    content: '/10';
    margin-left: 1px;
    font-weight: 300;
    opacity: .8;
  }
`;

const RottenTomatoesValue = styled(PairValue)`
  font-weight: bold;
  letter-spacing: .5px;
`;

const AmazonButton = styled(Button)`
  margin-top: 8px;
  background: ${colors.AMAZON};
  color: #fff;

  &:hover {
    background: ${convertColor(`color(${colors.AMAZON} shade(7%))`)};
  }
`;

const WishlistButton = styled(Button)`
  background: ${colors.SECONDARY};
  color: #fff;

  &:hover {
    background: ${convertColor(`color(${colors.SECONDARY} shade(7%))`)};
  }
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
        <Movie>
          <MovieLeft>
            <Poster 
              src={winterSoldierPoster} 
              data-grade={true}
            />
          </MovieLeft>

          <MovieCenter>
            <MovieTitle>Moana <MovieYear>(2017)</MovieYear></MovieTitle>
            
            <Pilot>
              In the near future, a weary Logan (Hugh Jackman) cares for an ailing Professor X (Patrick Stewart) at a remote outpost on the Mexican border...&nbsp;
              <PilotMore>more →</PilotMore>
            </Pilot>

            <Pair>
              <PairKey>genre</PairKey>
              <PairValue>Science fiction film/Drama film</PairValue>
            </Pair>

            <Pair>
              <PairKey>director</PairKey>
              <PairValue>James Mangold</PairValue>
            </Pair>

            <MovieRatings>
              <InRowPair>
                <PairKey>IMDb</PairKey>
                <IMDbRateValue>7.8</IMDbRateValue>
              </InRowPair>

              <InRowPair>
                <PairKey>Rotten Tomatoes</PairKey>
                <RottenTomatoesValue>95%</RottenTomatoesValue>
              </InRowPair>
            </MovieRatings>
          </MovieCenter>

          <MovieRight>
            <WishlistButton
              icon="+"
              children={"Add To Wishlist"}
              onClick={() => {}}
            />
            <AmazonButton
              icon="a"
              children={"Buy On Amazoon"}
              onClick={() => {}}
            />
          </MovieRight>
        </Movie>

        <Seasons />
      </PaddedContainer>

    </MovieCover>
  </div>
);

export default Subtitles;
