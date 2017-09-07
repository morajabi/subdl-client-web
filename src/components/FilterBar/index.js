import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';

import { mobile } from '../../utils/media';
import Filter from './Filter';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 0;

  ${mobile(css`
    justify-content: center;
  `)}
`;

const IconWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;

  ${mobile(css`
    flex: 1 1 100%;
    padding: 10px 0;
  `)}

  path {
    fill: currentColor;
  }
`;

const PaddedFilter = styled(Filter)`
  ${mobile(css`
    flex: 1 0 100%;
    margin-bottom: 15px;
  `)}
`;

const FilterBar = props => (
  <Wrapper>
    <Icon />

    <PaddedFilter />
    <PaddedFilter />
    <PaddedFilter />
  </Wrapper>
);

export default FilterBar;

const Icon = () => (
  <IconWrapper>
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="17" xmlnsXlink="http://www.w3.org/1999/xlink">
      <title>filter</title>
      <path d="M18 0H0l7 7.2V17l4-2.2V7.2L18 0z" />
    </svg>
  </IconWrapper>
);

