/* @flow */
import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import Overdrive from 'react-overdrive';
import map from 'lodash/map';
import { v4 } from 'uuid';
import qs from 'qs';
import { parseUrlQuery } from '../utils';
import MediaItemsQuery from '../graphql/MediaItemsQuery.gql';

import Container from './Container';
import TopNav from './TopNav';
import SearchBoxContainer from '../containers/SearchBoxContainer';
import MovieItem from './MovieItem';
import NoMatch from './NoMatch';
import DidYouMeanContainer from '../containers/DidYouMeanContainer';

import loganPoster from '../assets/images/demo/logan-poster.jpg';
import arrivalPoster from '../assets/images/demo/arrival-poster.jpg';
import winterSoldierPoster from '../assets/images/demo/winter-soldier-poster.jpg';

const PaddedContainer = styled(Container)`
  padding-top: 80px;
`;

const MovieList = styled.div`
  padding: 15px 0 0 0;
  color: #333;
`;

const MovieRow = styled(Link)`
  display: block;
  margin-bottom: 7px;
  color: #333;

  &:nth-child(2n+1) {
    background: #f6f6f6;
  }

  &:hover {
    background: #f2f2f2;
  }
`;

const MovieItemWithPoster = styled(MovieItem)`
  height: 110px;
  padding: 0;
`;

const SearchDescription = styled.div`
  margin: 25px 0 0 0;
  font-size: 1em;
  font-weight: 300;
  color: #555;
`;

const PaddedNoMatch = styled(NoMatch)`
  margin-top: 30px;
`;

type Props = { location: any, history: any, data: Object };

@graphql(MediaItemsQuery, {
  options: props => ({
    variables: { title: parseUrlQuery(props.location).q },
  }),
  skip: props => !!parseUrlQuery(props.location).q,
})
class Search extends PureComponent<Props> {

  static defaultProps = {
    history: {},
    location: {},
    data: {
      loading: false,
      movie: [],
    },
  }

  render() {
    const {
      location,
      history,
      data: {
        loading,
        movies,
        error,
      }
    } = this.props;
    const searchQuery = parseUrlQuery(location).q || '';
    console.log(error);
    return (
      <div>
        <header>
          <TopNav searchBar={false} />
        </header>
        <PaddedContainer>
          {/* <Overdrive id="search-box8"> */}
          <SearchBoxContainer />
          {/* </Overdrive> */}
          <DidYouMeanContainer />
          <SearchDescription>All movies match your query:</SearchDescription>

          <MovieList>
            <MovieRow to="/">
              <MovieItemWithPoster
                title="Guardians Of The Galaxy"
                year={2015}
                posterPath={loganPoster}
                subtitlesCount={98}
              />
            </MovieRow>

            <MovieRow to="/">
              <MovieItemWithPoster
                title="Captian America: The Winter Soldier"
                year={2016}
                posterPath={winterSoldierPoster}
                subtitlesCount={720}
              />
            </MovieRow>

            <MovieRow to="/">
              <MovieItemWithPoster
                title="Arrival"
                year={2017}
                posterPath={arrivalPoster}
              />
            </MovieRow>
          </MovieList>

          {/* <PaddedNoMatch query="Rouge Onee" /> */}

        </PaddedContainer>
      </div>
    );
  }
}

export default Search;
