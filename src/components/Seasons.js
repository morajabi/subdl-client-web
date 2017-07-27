/* @flow */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../utils/styleUtils';

import Scrollbars from 'react-custom-scrollbars';
import Container from './Container';

const Wrapper = styled.div`
  padding: 13px;
`;

const SeasonsBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px 0 8px 0;
  font-size: 24px;

  ${media.to.small`
    padding-bottom: 15px;  
  `}
`;

const SeasonsBarTitle = styled.div`
  flex: 0 0 auto;
  font-weight: 300;
  white-space: nowrap;

  ${media.to.small`
    display: none;
  `}
`;

const Season = styled.div`
  flex: 0 0 auto;
  font-weight: bold;
  color: ${colors.ORANGE};
  white-space: nowrap;
  margin: 0 10px;
`;

const OtherSeasonsLink = styled.div`
  flex: 0 0 auto;
  white-space: nowrap;
  align-self: flex-end;
  padding: 3px 5px;
  margin-bottom: 1px;
  font-size: 14px;
  font-weight: 300
  letter-spacing: .5px;
  border-radius: 3px;
  background: rgba(255, 255, 255, .1);
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, .3);
  }
`;

const Episodes = styled.div`
  display: inline-block;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
`;

const Episode = styled.div`
  height: 55px;
  line-height: 55px;
  display: inline-block;
  padding: 0 13px;
  white-space: nowrap;
  font-weight: bold;
  font-size: 19px;
  border-radius: 3px;
  cursor: pointer;
  transition: background .1s;

  ${({ selected }) => selected ? css`
    color: ${colors.ORANGE};
    background: rgba(255, 255, 255, 0.1);
  ` : css``}

  &:before {
    content: 'E.';
    font-weight: 300;
    opacity: .8;
  }

  &:last-item { 
    margin-right: 0; 
  }

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const ReleaseDate = styled.time`
  font-size: .8em;
  font-weight: 300;
  letter-spacing: .3px;
  opacity: 0.6;
`;


// const Seasons = ({ ...props }: { props: any }) => (

class Seasons extends Component {
  scrollbar: any;
  
  constructor(props: Object) {
    super(props);
  }

  componentDidMount() {
    // if the last one is selected
    this.scrollbar.scrollToRight();
  }

  render() {
    return (
      <Wrapper {...this.props}>
        <Container>
          <SeasonsBar>
            <SeasonsBarTitle>Choose From</SeasonsBarTitle>
            <Season>Season 1</Season>
            <OtherSeasonsLink>other seasons →</OtherSeasonsLink>
          </SeasonsBar>
          {/* activate unversal with `universal` prop */}
          <Scrollbars 
            thumbVertical={false}
            style={{ height: 55 }} 
            ref={r => this.scrollbar = r} 
            renderTrackVertical={props => <div {...props} className="track-vertical" style={{display:"none"}}/>}
            renderThumbVertical={props => <div {...props} className="thumb-vertical" style={{display:"none"}}/>}
          >
            <Episodes>
              <Episode>01</Episode>
              <Episode>02</Episode>
              <Episode>03</Episode>
              <Episode>04</Episode>
              <Episode>05</Episode>
              <Episode>06</Episode>
              <Episode>07</Episode>
              <Episode>08</Episode>
              <Episode>09</Episode>
              <Episode>10</Episode>
              <Episode>11</Episode>
              <Episode>12</Episode>
              <Episode>13</Episode>
              <Episode>14</Episode>
              <Episode>15</Episode>
              <Episode>16</Episode>
              <Episode>17</Episode>
              <Episode>18 <ReleaseDate>7 days ago</ReleaseDate></Episode>
              <Episode selected>19 <ReleaseDate>yesterday</ReleaseDate></Episode>
            </Episodes>
          </Scrollbars>
        </Container>
      </Wrapper>
    );
  }
}

export default Seasons;
