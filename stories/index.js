import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import MoreDropdown from '../src/components/FilterBar/MoreDropdown';
import Filter from '../src/components/FilterBar/Filter';
import FilterBar from '../src/components/FilterBar';

import '../src/styles';

storiesOf('FilterBar', module)
  .add('MoreDropdown', () => <MoreDropdown />)
  .add('Filter (single)', () => <Filter />)
  .add('FilterBar', () => <FilterBar />)
