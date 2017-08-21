/* @flow */
import React, { PureComponent } from 'react';
import styled, { keyframes } from 'styled-components';
import { gql, graphql } from 'react-apollo';
import { media } from '../utils/styleUtils';
import { convert as convertColor } from 'css-color-function';
import { colors } from '../utils/styleUtils';

import { ResetedButton } from './Button';
import { ResetedInput } from './Input';
import { Bounce as BounceLoading } from './Loadings';
import MovieItem from './MovieItem';
import ResultsBox from './ResultsBox';

// demo images
import loganPoster from '../assets/images/demo/logan-poster.jpg';
import arrivalPoster from '../assets/images/demo/arrival-poster.jpg';
import winterSoldierPoster from '../assets/images/demo/winter-soldier-poster.jpg';

// --
const normalHeight = 50;
const smallHeight = 50;

// --
const Wrapper = styled.div`
  position: relative;
  max-width: 600px;
`;

const Box = styled.div`
  position: relative;
  width: 100%;
  height: ${normalHeight}px;

  ${media.to.medium`
    height: ${smallHeight}px;
  `}
`;

const Input = styled(ResetedInput)`
  width: 100%;
  height: 100%;
  padding: 5px 18px;
  font-weight: 300;
  font-size: 1.1em;
  border: 1px solid #ddd;
  background: #fff;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .2);
  transition: .2s border-color, .3s box-shadow;

  &::placeholder {
    color: #bebebe;
    opacity: 1;
  }

  &:focus,
  &:hover {
    border-color: #bbb;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
  }
`;

const InputRight = styled.div`
  position: absolute;
  top: 7px;
  right: 7px;
  bottom: 7px;
  display: flex;
`;

const SearchButton = styled(ResetedButton)`
  height: 100%;
  padding: 0 22px;
  font-size: 14px;
  font-weight: 300;
  letter-spacing: 1.2px;
  background: ${colors.PRIMARY};
  cursor: pointer;
  transition: .1s background;

  &:hover {
    background: ${convertColor(`color(${colors.PRIMARY} shade(3))`)};
  }

  &:focus {
    background: ${convertColor(`color(${colors.PRIMARY} shade(7))`)};
  }

  ${media.to.small`
    display: none;
  `}
`;

const SearchLoading = styled(BounceLoading)`
  margin: 0 12px 0 0;
  align-self: center;
`;

const SearchResultsBox = styled(ResultsBox)`
  position: absolute;
  top: ${normalHeight + 2}px;
  z-index: 2;
`;

const sampleResult = {
  title: 'Rogue One',
  year: 2017,
  posterUrl: winterSoldierPoster,
  subtitlesCount: 46,
};

/**
 * Search Box with Results
 */
type SearchBoxProps = {
  isLoading?: boolean,
  searchQuery?: string,
  mediaItems: Array<{}>,
  onInputChange?: (any) => void,
  onSubmit?: (any) => void,
};

class SearchBox extends PureComponent<SearchBoxProps> {

  inputChanged: (e: any) => void;
  submitted: (e: any) => void;

  static defaultProps = {
    mediaItems: [],
  }

  constructor(props: any) {
    super(props);

    // Bind event handlers to context
    this.inputChanged = this.inputChanged.bind(this);
    this.submitted = this.submitted.bind(this);
  }

  inputChanged(e: any) {
    this.props.onInputChange &&
      this.props.onInputChange(e);
  }

  submitted(e: any) {
    this.props.onSubmit &&
      this.props.onSubmit(e);
  }

  render() {
    const {
      isLoading = false,
      searchQuery,
      mediaItems,
      onInputChange,
      onSubmit,
      ...props
    } = this.props;

    return (
      <Wrapper {...props}>
        <form action="/search" onSubmit={this.submitted}>
          <Box>
            <Input
              placeholder="Search for movies, TV series, films, etc"
              value={searchQuery}
              onChange={this.inputChanged}
            />
            <InputRight>
              {isLoading && <SearchLoading size="25px" />}
              <SearchButton type="submit">Search</SearchButton>
            </InputRight>
          </Box>
        </form>

        <SearchResultsBox items={mediaItems} />
      </Wrapper>
    );
  }
}

export default SearchBox;
