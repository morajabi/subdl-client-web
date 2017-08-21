/* @flow */
import React, { PureComponent } from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {
  setSearchQuery,
  setDebouncedSearchQuery,
  searchQuerySelector,
  debouncedSearchQuerySelector,
} from '../modules/search';
import debounce from 'lodash/debounce';

import SearchBox from '../components/SearchBox';

const moviesQuery = gql`
  query ChannelsListQuery($title: String!) {
    movies(title: $title, limit: 4, autoCorrect: true) {
      SubdlId
      title
      year
      posterPath
    }
  }
`;

type Movie = {
  SubdlId?: string,
  title?: string,
  year?: number,
  posterPath?: string,
}

type Props = {
  searchQuery?: string,
  setSearchQuery: (query: string) => {},
  data: {
    loading?: boolean,
  },
};


@connect(
  (state) => ({
    searchQuery: searchQuerySelector(state),
    debouncedSearchQuery: debouncedSearchQuerySelector(state),
  }),
  {
    setSearchQuery,
    setDebouncedSearchQuery,
  }
)
@graphql(moviesQuery, {
  options: (props) => ({
    variables: { title: props.debouncedSearchQuery }
  }),
  skip: (props) => props.debouncedSearchQuery === '',
})
class SearchBoxContainer extends PureComponent<Props> {

  inputChanged: Function;
  debouncedInputChanged: Function;

  static defaultProps = {
    setSearchQuery: (e) => {},
    setDebouncedSearchQuery: (e) => {},
    data: {
      loading: false,
    }
  }

  constructor(props: Props) {
    super(props);

    this.inputChanged = this.inputChanged.bind(this);
    this.debouncedInputChanged = debounce(this.debouncedInputChanged.bind(this), 300);
  }

  debouncedInputChanged(value: string) {
    this.props.setDebouncedSearchQuery(value);
  }

  inputChanged(e: any) {
    e.persist();
    this.props.setSearchQuery(e.target.value);
    this.debouncedInputChanged(e.target.value);
  }

  render() {
    const {
      setSearchQuery,
      data: {
        loading,
        movies,
      },
      searchQuery,
      ...props,
    } = this.props;

    return (
      <SearchBox
        {...props}
        searchQuery={searchQuery}
        isLoading={loading}
        mediaItems={movies}
        onInputChange={this.inputChanged} />
    );
  }
}

export default SearchBoxContainer;
