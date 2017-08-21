/* @flow */
import React, { PureComponent } from 'react';
import { gql, graphql } from 'react-apollo';
import { connect } from 'react-redux';
import {
  setSearchQuery,
  searchQuerySelector,
} from '../modules/search';

import SearchBox from '../components/SearchBox';

const moviesQuery = gql`
  query ChannelsListQuery($title: String!) {
    movies(title: $title) {
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

// {
//   SubdlId: string,
//   title: string,
//   year: number,
//   posterPath?: string,
// }

@connect(
  (state) => ({
    searchQuery: searchQuerySelector(state),
  }),
  {
    setSearchQuery,
  }
)
@graphql(moviesQuery, {
  options: (props) => ({
    variables: { title: props.searchQuery || '' }
  }),
})
class SearchBoxContainer extends PureComponent<Props> {

  inputChanged: Function;

  static defaultProps = {
    setSearchQuery: (e) => {},
    data: {
      loading: false,
    }
  }

  constructor(props: Props) {
    super(props);

    this.inputChanged = this.inputChanged.bind(this);
  }

  inputChanged(e: any) {
    this.props.setSearchQuery(e.target.value);
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
