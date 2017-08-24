/* @flow */
import React, { PureComponent } from 'react';
import { gql, graphql } from 'react-apollo';
import { withRouter } from 'react-router';
import qs from 'qs';
import DidYouMeanQuery from '../graphql/DidYouMean.gql';

import DidYouMean from '../components/DidYouMean';

type Props = {
  history: any,
  location: any,
  searchPageQuery?: string,
  data: any | Object,
};

@withRouter
@graphql(DidYouMeanQuery, {
  options: props => ({
    variables: { title: getSearchQuery(props.location) },
  }),
  skip: props => getSearchQuery(props.location) === '',
})
class DidYouMeanContainer extends PureComponent<Props> {

  static defaultProps = {
    history: null,
    location: null,
    data: null,
  }

  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      data: {
        didYouMean,
        loading,
        error,
      },
      ...props
    } = this.props;

    return (
      <DidYouMean query={didYouMean || ''} />
    );
  }
}

export default DidYouMeanContainer;

function getSearchQuery(location: Object) {
  return qs.parse(location.search.substring(1)).q || '';
}
