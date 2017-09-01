/* @flow */
import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { colors, media } from '../utils/styleUtils';

import Scrollbars from 'react-custom-scrollbars';
import Container from './Container';
import { ResetedButton } from './Button';

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

const EpisodesScrollContainer = styled.div`
  position: relative;
`;

const Episodes = styled.div`
  display: inline-block;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
`;

const Shadow = styled(ResetedButton)`
  height: 55px;
  width: 35px;
  position: absolute;
  top: 0;
  cursor: pointer;
  transition: transform .1s;

  &:hover,
  &:focus {
    transform: scale(1.15);
  }

  &:after {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1.7em;
    font-weight: bold;
    color: #fff;
  }
`;

const RightShadow = styled(Shadow)`
  right: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4));

  &:after {
    content: '→';
  }
`;

const LeftShadow = styled(Shadow)`
  left: 0;
  background: linear-gradient(90deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3));

  &:after {
    content: '←';
  }
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

type State = {
  showRight: boolean,
  showLeft: boolean,
};

class Seasons extends Component<{}, State> {

  scrollbar: any;
  moveLeft: Function;
  moveRight: Function;
  scrollUpdated: Function;

  constructor(...args: any) {
    super(...args);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.scrollUpdated = this.scrollUpdated.bind(this);
  }

  state = {
    showRight: true,
    showLeft: false,
  }

  componentDidMount() {
    // if the last one is selected
    this.scrollbar.scrollToRight();
  }

  render() {
    const { showRight, showLeft } = this.state;

    return (
      <Wrapper>
        <Container>

          <SeasonsBar>
            <SeasonsBarTitle>Choose From</SeasonsBarTitle>
            <Season>Season 1</Season>
            <OtherSeasonsLink>other seasons →</OtherSeasonsLink>
          </SeasonsBar>

          <EpisodesScrollContainer>
            {/* activate unversal with `universal` prop */}
            <Scrollbars
              thumbVertical={false}
              style={{ height: 60, transition: 'all .2s' }}
              ref={r => this.scrollbar = r}
              onScrollFrame={this.scrollUpdated}
              renderTrackVertical={props =>
                <div
                  {...props}
                  className="track-vertical"
                  style={{display:"none"}}
                />
              }
              renderThumbVertical={props =>
                <div {...props}
                  className="thumb-vertical"
                  style={{display:"none"}}
                />
              }
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

            {showRight && <RightShadow onClick={this.moveLeft} />}
            {showLeft && <LeftShadow onClick={this.moveRight} />}
          </EpisodesScrollContainer>
        </Container>
      </Wrapper>
    );
  }

  moveLeft() {
    const nextPos = Number(this.scrollbar.getScrollLeft()) + 70;
    this.scrollbar.scrollLeft(nextPos);
  }

  moveRight() {
    const nextPos = Number(this.scrollbar.getScrollLeft()) - 70;
    this.scrollbar.scrollLeft(nextPos);
  }

  scrollUpdated(values: Object) {
    const { left } = values;
    if(left === 0) {
      this.setState({ showLeft: false, showRight: true });
    } else if (left === 1) {
      this.setState({ showLeft: true, showRight: false });
    } else {
      this.setState({ showLeft: true, showRight: true });
    }
  }
}

export default Seasons;
