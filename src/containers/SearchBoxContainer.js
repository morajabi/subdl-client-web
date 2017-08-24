/* @flow */
import React, { PureComponent } from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import debounce from 'lodash/debounce';
import {
  setSearchQuery,
  setDebouncedSearchQuery,
  searchQuerySelector,
  debouncedSearchQuerySelector,
} from '../modules/search';

import SearchBox from '../components/SearchBox';

const moviesQuery = gql`
  query ChannelsListQuery($title: String!) {
    movies(title: $title, limit: 4, autoCorrect: true) {
      SubdlId
      title
      year
      posterPath
      mediaType
    }
  }
`;

type Movie = {
  SubdlId?: string,
  title?: string,
  year?: number,
  posterPath?: string,
}

type Data = {
  loading?: boolean,
  movie: Array<Movie>,
}

type Props = {
  history: any,
  location: any,
  searchQuery: string,
  setSearchQuery: (d?: string) => {},
  setDebouncedSearchQuery: (d?: string) => {},
  data: Object,
};

type State = {
  showResults: boolean,
};

@withRouter
@connect(
  state => ({
    searchQuery: searchQuerySelector(state),
    debouncedSearchQuery: debouncedSearchQuerySelector(state),
  }),
  {
    setSearchQuery,
    setDebouncedSearchQuery,
  },
)
@graphql(moviesQuery, {
  options: props => ({
    variables: { title: props.debouncedSearchQuery },
  }),
  skip: props => props.debouncedSearchQuery === '',
})
class SearchBoxContainer extends PureComponent<Props, State> {

  static defaultProps = {
    history: {},
    location: {},
    searchQuery: '',
    setSearchQuery: () => {},
    setDebouncedSearchQuery: () => {},
    data: {
      loading: false,
      movie: [],
    },
  }

  state = {
    showResults: false,
  }

  constructor(props: Props) {
    super(props);

    this.submitted = this.submitted.bind(this);
    this.inputChanged = this.inputChanged.bind(this);
    this.debouncedInputChanged = debounce(this.debouncedInputChanged.bind(this), 300);
  }

  submitted: Function;
  inputChanged: Function;
  debouncedInputChanged: Function;

  debouncedInputChanged(value: string) {
    this.props.setDebouncedSearchQuery(value);
  }

  inputChanged(e: any) {
    e.persist();
    this.props.setSearchQuery(e.target.value);
    this.debouncedInputChanged(e.target.value);
  }

  submitted(e: any) {
    e.preventDefault();
    this.props.history.push(`/search?q=${this.props.searchQuery}`);
    this.setState({ showResults: false });
    return false;
  }

  render() {
    const {
      setSearchQuery,
      data: {
        loading,
        movies,
      },
      searchQuery,
      location,
      history,
      ...props
    } = this.props;
    const { showResults } = this.state;

    return (
      <SearchBox
        {...props}
        showResults={showResults}
        searchQuery={searchQuery}
        isLoading={loading}
        mediaItems={movies}
        onInputChange={this.inputChanged}
        onSubmit={this.submitted}
      />
    );
  }
}

export default SearchBoxContainer;
