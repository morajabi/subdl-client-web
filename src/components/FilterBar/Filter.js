/* @flow */
import React, { PureComponent } from 'react';
import styled, { css } from 'styled-components';
import darken from 'polished/lib/color/darken';
import map from 'lodash/map';
import v4 from 'uuid/v4';
import Downshift from 'downshift';

import { grey, darkGrey, lightBlue } from '../../utils/colors';
import { ResetedButton } from '../Button';
import MoreDropdown from './MoreDropdown';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.div`
  display: inline-block;
  margin-right: 12px;

  font-weight: 600;
`;

const Option = styled(ResetedButton)`
  display: inline-block;
  height: 25px;
  margin-right: 7px;
  padding: 0 8px;

  font-size: .9em;
  line-height: 25px;
  cursor: pointer;
  background: ${grey};
  color: ${darkGrey};
  outline: none;

  &:last-child {
    margin-right: 0;
  }

  ${p => p.selected ? css`
    background: ${lightBlue};
    color: white;

    &:focus {
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
    }
  ` : css`
    &:hover,
    &:focus {
      background: ${darken(0.05, grey)};
      color: ${darken(0.4, darkGrey)};
    }
  `}
`;

const items: string[] = [
  '480px',
  '720p-1080p',
  '4K',
  '8K',
  '12K',
];
const limit = 3;
const all = 'all';


const Filter = ({ className, ...props}) => (
  <Downshift {...props} defaultSelectedItem={all}>
    {({
      getRootProps,
      getItemProps,
      selectedItem,
      highlightedIndex,
      selectItem,
    }) => {

      // Check where is the selected item
      const getSelectedIndex =
        items.findIndex(item => item === selectedItem);
      const isSelectedInDropdown =
        getSelectedIndex !== -1 && getSelectedIndex >= limit;

      // Decrease limit if it's from dropdown
      const limitWithoutSelected =
        selectedItem !== all && isSelectedInDropdown ?
          limit - 1:
          limit;

      // Divide items into two categories
      let limitedItems = items.slice(0, limitWithoutSelected);
      let limitedDropdownItems = items.slice(limitWithoutSelected);

      if (isSelectedInDropdown) {
        limitedItems = [selectedItem, ...limitedItems];
        limitedDropdownItems =
          limitedDropdownItems.filter(item => selectedItem !== item);
      }

      return (
        <Wrapper
          className={className}
          {...getRootProps({ refKey: 'innerRef' })}
        >
          <Label>quality</Label>

          <Option
            {...getItemProps({ item: all })}
            selected={selectedItem === all}
          >
            {all}
          </Option>

          {limitedItems.map(item => (
            <Option
              {...getItemProps({ item })}
              selected={selectedItem === item}
            >
              {item}
            </Option>
          ))}

          {!!limitedDropdownItems.length &&
            <MoreDropdown
              items={limitedDropdownItems}
              onChange={item => selectItem(item)}
              selectedItem={selectedItem}
            />
          }
        </Wrapper>
      );
    }}
  </Downshift>
);

export default Filter;
