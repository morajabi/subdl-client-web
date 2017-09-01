/* @flow */
import React, { Component } from 'react';
import styled from 'styled-components';
import { colors, media } from '../utils/styleUtils';
import { convert as convertColor } from 'css-color-function';

import Container from './Container';
import TopNav from './TopNav';
import Cover from './Cover';
import Button from './Button';
import Seasons from './Seasons';

import winterSoldierPoster from '../assets/images/demo/winter-soldier-poster.jpg';
import theBlacklistPoster from '../assets/images/demo/the-blacklist-poster.jpg';
import despicableMe3Poster from '../assets/images/demo/despicable-me-3-poster.jpg';
import doctorStrangePoster from '../assets/images/demo/doctor-strange-poster.jpg';

const smallMedia = media.to.small;

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
  box-shadow: 0 5px 10px rgba(0, 0, 0, .3);

  ${smallMedia`
    max-width: 120px;
  `}
`;

const Movie = styled.div`
  with: 100%;
  display: flex;
  justify-content: flex-start;

  ${smallMedia`
    flex-direction: column;
    align-items: center;
    text-align: center;
  `}
`;

const MovieLeft = styled.div`
  flex: 0 0 auto;
`;

const MovieCenter = styled.div`
  flex: 1 1 auto;
  padding: 0 0 0 40px;

  ${smallMedia`
    padding-left: 0;
    margin-top: 15px;
    margin-bottom: 12px;
  `}
`;

const MovieRight = styled.div`
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 0 0 30px;

  ${smallMedia`
    padding-left: 0;
    flex-direction: row;
    justify-content: space-between;
  `}
`;

const MovieTitle = styled.h1`
  with: 100%;
  margin: 0;
  line-height: 1.5em;
  font-size: 36px;
  font-weight: bold;
  letter-spacing: .8px;

  ${smallMedia`
    font-size: 28px;
  `}
`;

const MovieYear = styled.span`
  font-size: .7em;
  font-weight: 300;
  margin-left: 7px;
  opacity: .9;
`;

const MovieDetails = styled.div`
  ${smallMedia`
    display: none;
  `}
`;

const Pilot = styled.p`
  margin: 0;
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
  margin: 15px 0 0 0;
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

const ActionButton = styled(Button)`
`;

const AmazonButton = styled(ActionButton)`
  margin-top: 10px;
  background: ${colors.AMAZON};
  color: #fff;

  ${smallMedia`
    margin-top: 0;
  `}

  &:hover {
    background: ${convertColor(`color(${colors.AMAZON} shade(7%))`)};
  }
`;

const WishlistButton = styled(ActionButton)`
  background: ${colors.SECONDARY};
  color: #fff;

  &:hover {
    background: ${convertColor(`color(${colors.SECONDARY} shade(7%))`)};
  }
`;


const SeasonSection = styled(Seasons)`
  margin: 40px 0 0 0;
  background: rgba(255, 255, 255, 0.1);
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
              src={doctorStrangePoster}
              data-grade={true}
            />
          </MovieLeft>
          <MovieCenter>
            <MovieTitle>Doctor Strange <MovieYear>(2016)</MovieYear></MovieTitle>

            <MovieDetails>
              <Pilot>
                Gru (Steve Carell) and his wife Lucy (Kristen Wiig) must stop former '80s child star Balthazar Bratt (Trey Parker) from achieving world domination.&nbsp;
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
            </MovieDetails>

          </MovieCenter>
          <MovieRight>
            <WishlistButton
              icon="+"
              children={"Add To Wishlist"}
              onClick={() => {}}
            />
            <AmazonButton
              icon="a"
              children={"Watch On Amazoon"}
              onClick={() => {}}
            />
          </MovieRight>
        </Movie>
      </PaddedContainer>

      <SeasonSection />

    </MovieCover>
  </div>
);

export default Subtitles;
